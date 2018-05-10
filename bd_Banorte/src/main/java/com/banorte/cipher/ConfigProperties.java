package main.java.com.banorte.cipher;

import java.io.IOException;
import java.util.Properties;


public class ConfigProperties extends Properties {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	protected static final String PROPERTY_CIPHER_CONTROL = "com.ibm.mfp.server.cipherControl";
	
	private static ConfigProperties properties;
	
	public ConfigProperties(){
		super();
	}
/*	
	public static ConfigProperties getInstance(){
		if(properties == null){
			properties = new ConfigProperties();
			try {
				
				properties.load(McaLoginApplication.sCipherControl);
				//properties.load(ConfigProperties.class.getResourceAsStream("/config.properties"));
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return properties;
	}
	*/
	public static String getTextKey(){
		//return super.getProperty("cipher.control");
		String llave = System.getProperty(PROPERTY_CIPHER_CONTROL);
		//return McaLoginApplication.sCipherControl;
		return llave;
	}
	
	public static byte[] getBytesKey(){
		String val = getTextKey();
		//String val = "535543555253415050535f323031353130313320202020202020202020202020";
		System.out.println("contro: " +val);
		return UtilsCipher.fromAscciBinaryToHexBinary(val.getBytes(),0,val.getBytes().length);
	}
	/*
	public String getDriverClass(){
		return super.getProperty("server.driver.class");		
	}
	
	public String getUrlBD(){
		return super.getProperty("server.bd.url");	
	}
	*/
}
