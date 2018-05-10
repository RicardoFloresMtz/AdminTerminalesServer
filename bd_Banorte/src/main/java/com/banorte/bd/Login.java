package main.java.com.banorte.bd;

import org.apache.wink.json4j.JSONException;
import org.apache.wink.json4j.JSONObject;

public class Login {
	
	protected static final String PROPERTY_USRSEG_DB = "com.ibm.mfp.server.db.userSeg";
	protected static final String PROPERTY_KEYSEG_DB = "com.ibm.mfp.server.db.keySeg";
	protected static final String PROPERTY_USREJE_DB = "com.ibm.mfp.server.db.userEje";
	protected static final String PROPERTY_KEYEJE_DB = "com.ibm.mfp.server.db.keyEje";
	
	public String accesa(String type, String usr, String key) throws JSONException{
		
		JSONObject respLogin = new JSONObject();
		Boolean canAccess = false;
		String mensaje = "Datos incorrectos favor de validar";
		try{
			
			respLogin.put("Acceso",canAccess);
			respLogin.put("MensajeAUsuario",mensaje);
			
			if(type.equals("1")){ //Seguridad
				if(System.getProperty(PROPERTY_USRSEG_DB).equals(usr) && System.getProperty(PROPERTY_KEYSEG_DB).equals(key)){
					canAccess = true;
					mensaje = "Bienvenido personal de seguridad";
					respLogin.put("Acceso",canAccess);
					respLogin.put("MensajeAUsuario",mensaje);
				}
			}
			if(type.equals("2")){ //Ejecutivo
				if(System.getProperty(PROPERTY_USREJE_DB).equals(usr) && System.getProperty(PROPERTY_KEYEJE_DB).equals(key)){
					canAccess = true;
					mensaje = "Bienvenido ejecutivo";
					respLogin.put("Acceso",canAccess);
					respLogin.put("MensajeAUsuario",mensaje);
				}
			}
		}catch(Exception ex){
			
		}
		
		return respLogin.toString();
	}
}
