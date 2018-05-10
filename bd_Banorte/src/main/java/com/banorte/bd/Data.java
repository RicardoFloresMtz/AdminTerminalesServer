package main.java.com.banorte.bd;


import java.security.Security;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import org.apache.wink.json4j.JSONArray;
import org.apache.wink.json4j.JSONException;
import org.apache.wink.json4j.JSONObject;

import main.java.com.banorte.cipher.Crypter;
import oracle.jdbc.*;



public class Data {
	
	Statement stmt = null;
	ResultSet rs = null;
	CallableStatement cs = null;
	protected static final String PROPERTY_OWNER_DB = "com.ibm.mfp.server.db.owner";
	

	public String getRegistros(Connection con) throws JSONException{
		
		JSONObject objConsulta = new JSONObject();
		JSONArray arrayRegistros = new JSONArray();
		
		try {
			
		
			cs= con.prepareCall("{ CALL "+ System.getProperty(PROPERTY_OWNER_DB) +".SP_ADMSUC_CONSULTAUSRS(?)}");
			cs.registerOutParameter(1, OracleTypes.CURSOR);
			cs.execute();
			
			rs = (ResultSet) cs.getObject(1);
			
			if(rs == null){
				objConsulta.put("Id", "0");
				objConsulta.put("MensajeAUsuario", "Resultado (rs) nulo");
			}else{
				
				objConsulta.put("Id", "1");
				objConsulta.put("MensajeAUsuario", "Resultado exitoso");
				while (rs.next()) 
				{ 
					JSONObject registro = new JSONObject();
					registro.put("ID",rs.getString(1));
					registro.put("TERMINAL_ID",rs.getString(2));
					registro.put("SUCURSAL_ID",rs.getString(3));
					registro.put("USRLEGACY",rs.getString(4));
					registro.put("PASSLEGACY",rs.getString(5));
					registro.put("SALT",rs.getString(6));
					registro.put("ACTIVO",rs.getString(7));
					
					arrayRegistros.add(registro);
				}
				objConsulta.put("ArrayRegistros", arrayRegistros);
			}
			
		} catch (Exception e) {
				
			objConsulta.put("Id", "0");
			objConsulta.put("Mensaje", e.getMessage());
		}finally {
			try {
				if(rs != null) rs.close();
				if(cs != null) cs.close();
				if(stmt != null) stmt.close();
				if(con != null) con.close();
				
			}catch(SQLException e){
				e.printStackTrace();
			}
		}
		
		return objConsulta.toString();
	}

public String setUpdateCrStatus(Connection con, String terminal_id, String sucursal_id, String activo) throws JSONException{
		
		JSONObject objRespUpdate = new JSONObject();
		
		try {
			
			cs= con.prepareCall("{ CALL "+System.getProperty(PROPERTY_OWNER_DB) +".SP_ADMSUC_UPDATECRACTIVO(?,?,?)}");
			cs.setString(1, terminal_id);
			cs.setString(2, sucursal_id);
			cs.setString(3, activo);
			cs.execute();
			
			if(cs == null){
				objRespUpdate.put("Id", "0");
				objRespUpdate.put("MensajeAUsuario", "Resultado (rs) nulo");
			}else{
				
				objRespUpdate.put("Id", "1");
				objRespUpdate.put("MensajeAUsuario", "Resultado exitoso");
				
			}
			
		} catch (Exception e) {
				
			objRespUpdate.put("Id", "0");
			objRespUpdate.put("Mensaje", e.getMessage());
		}finally {
			try {
				if(cs != null) cs.close();
				if(stmt != null) stmt.close();
				if(con != null) con.close();
				
			}catch(SQLException e){
				e.printStackTrace();
			}
		}
		
		return objRespUpdate.toString();
	}
	
	public String insertaUserPassLegacyData(Connection con, String usrLegacy, String passLegacy,String idTerminal) throws JSONException{
	
		JSONObject objRespInsert = new JSONObject();
		 
		try {
			Security.setProperty("crypto.policy", "unlimited");
			byte[] usuario = Crypter.getInstance().encrypt(usrLegacy);
			byte[] pass = Crypter.getInstance().encrypt(passLegacy);
//			String usuario = Crypter.getInstance().encrypt(usrLegacy);
//			String pass = Crypter.getInstance().encrypt(passLegacy);
			
			Integer numTerminal = Integer.parseInt( idTerminal.substring(1))+ 1;
			String sidTerminal = "T" + Integer.toString(numTerminal);
			System.out.println("IDTERMINAL: " + sidTerminal);
			cs= con.prepareCall("{ CALL "+ System.getProperty(PROPERTY_OWNER_DB) +".SP_ADMSUC_INSERTUSRPASLEGACY(?,?,?,?)}");
			cs.setString(1, getStringtoByteArray(usuario));
			cs.setString(2, getStringtoByteArray(pass));
//			cs.setString(1, usuario);
//			cs.setString(2, pass);
			cs.setString(3, sidTerminal);
			cs.registerOutParameter(4, OracleTypes.CURSOR);
			cs.execute();
			
			rs = (ResultSet) cs.getObject(4);
			
			if(rs == null){
				objRespInsert.put("Id", "0");
				objRespInsert.put("MensajeAUsuario", "Resultado (rs) nulo");
			}else{
				
				objRespInsert.put("Id", "1");
				objRespInsert.put("MensajeAUsuario", "Resultado exitoso");
				while (rs.next()) 
				{ 
					objRespInsert.put("ID",rs.getString(1));
					objRespInsert.put("TERMINAL_ID",rs.getString(2));
					objRespInsert.put("SUCURSAL_ID",rs.getString(3));
					objRespInsert.put("USRLEGACY",rs.getString(4));
					objRespInsert.put("PASSLEGACY",rs.getString(5));
					objRespInsert.put("SALT",rs.getString(6));
					objRespInsert.put("ACTIVO",rs.getString(7));
				}
				
			}
			
		} catch (Exception e) {
			
			objRespInsert.put("Id", "0");
			objRespInsert.put("Mensaje", e.getMessage());
		}finally {
			
			try {
				if(cs != null) cs.close();
				if(rs != null) rs.close();
				if(stmt != null) stmt.close();
				if(con != null) con.close();
				
			}catch(SQLException e){
				e.printStackTrace();
			}
		}
		
		return objRespInsert.toString();
}
	
	public String insertaUserPassLegacyDataMasiva(Connection con, String idTerminal,String registros) throws JSONException{
		
		JSONObject objRespInsert = new JSONObject();
		String snumTerminal = null;
		Integer inum = null;
		String idTerminal_aux = null;
		System.out.println("Entro insertaUserPassLegacyDataMasiva");
		
		try {
			JSONObject objRegistros = new  JSONObject( registros);
			JSONArray arrayRegistros = new JSONArray(objRegistros.getString("Array"));
			System.out.println(arrayRegistros);
			//Security.setProperty("crypto.policy", "unlimited");
			
			for(Object registro: arrayRegistros){
				JSONObject obj = new JSONObject(registro);
				
				snumTerminal = idTerminal.substring(1);
				inum = Integer.parseInt(snumTerminal) + 1;
				idTerminal_aux = "T"+ Integer.toString(inum);
				idTerminal = idTerminal_aux;
				System.out.println(idTerminal);
				byte[] usuario = Crypter.getInstance().encrypt(obj.getString("User"));
				byte[] pass = Crypter.getInstance().encrypt(obj.getString("Pass"));
				cs = con.prepareCall("{ CALL "+System.getProperty(PROPERTY_OWNER_DB)+".SP_ADMSUC_INSERTUSRPASLEGACY(?,?,?,?)}");
				cs.setString(1, getStringtoByteArray(usuario));
				cs.setString(2, getStringtoByteArray(pass) );
				cs.setString(3, idTerminal_aux);
				cs.registerOutParameter(4, OracleTypes.CURSOR);
				cs.execute();
				
			}
	
		} catch (Exception e) {
				
			objRespInsert.put("Id", "0");
			objRespInsert.put("MensajeAUusario", e.getMessage());
		}finally {
			objRespInsert.put("Id", "1");
			objRespInsert.put("MensajeAUusario", "ProcesoRealizado");
			try {
				if(cs != null) cs.close();
				if(rs != null) rs.close();
				if(stmt != null) stmt.close();
				if(con != null) con.close();
				
			}catch(SQLException e){
				e.printStackTrace();
			}
		}
		
		return objRespInsert.toString();
}

	public String getStringtoByteArray( byte[] bytesData){
		
		String st = "";
		for (byte b : bytesData) {
			st = st + String.format("%02X", b);
        }
		 System.out.print(st);
		return st;

	}
}
