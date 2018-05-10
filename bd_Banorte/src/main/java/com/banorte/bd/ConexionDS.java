package main.java.com.banorte.bd;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Hashtable;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;


public class ConexionDS {
	
	protected static final String PROPERTY_USR_DB = "com.ibm.mfp.server.db.usr";
	protected static final String PROPERTY_KEY_DB = "com.ibm.mfp.server.db.key";
	protected static final String PROPERTY_JDBC_DB = "com.ibm.mfp.server.db.jdbc";
	private Connection con = null;

	
/*	public Connection ConenctarDB(){
		
		try{
			
			Hashtable env = new Hashtable();
			env.put(Context.INITIAL_CONTEXT_FACTORY,"com.ibm.websphere.naming.WsnInitialContextFactory");
			InitialContext ctx = new InitialContext(env);
//			InitialContext ctx = new InitialContext();
			DataSource ds = (DataSource) ctx.lookup(System.getProperty(PROPERTY_JDBC_DB));
//			DataSource ds = (DataSource) ctx.lookup("jdbc/SucursApps");
//			ds.getConnection(System.getProperty(PROPERTY_USR_DB), System.getProperty(PROPERTY_KEY_DB));
			con = ds.getConnection(System.getProperty(PROPERTY_USR_DB),System.getProperty(PROPERTY_KEY_DB ));
			
		}catch(Exception e){
			
		}
		
		return con; 
	}*/
	
	public Connection ConenctarDB(){
		try{
//			InitialContext ctx = new InitialContext();
//			DataSource ds = (DataSource) ctx.lookup(System.getProperty(PROPERTY_JDBC_DB));
			DataSource ds = (DataSource) new InitialContext().lookup(System.getProperty(PROPERTY_JDBC_DB));
//			ds.getConnection(System.getProperty(PROPERTY_USR_DB), System.getProperty(PROPERTY_KEY_DB));
//			con = ds.getConnection("UGSUCUAPPS","ix$mdm58" );
			con = ds.getConnection(System.getProperty(PROPERTY_USR_DB),System.getProperty(PROPERTY_KEY_DB ));
			
		}catch(Exception e){
			System.out.println(e);
		}
		return con; 
	}
	
	
}
