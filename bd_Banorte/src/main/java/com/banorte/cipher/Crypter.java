package main.java.com.banorte.cipher;

import java.security.Security;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import main.java.com.banorte.cipher.ConfigProperties;
//import com.sun.crypto.provider.SunJCE;
import com.ibm.crypto.provider.IBMJCE;
import main.java.com.banorte.cipher.UtilsCipher;




public class Crypter {
	
	private String algorithm = "AES";
	private String mode ="CBC";
	private String padding = "NoPadding";
	private byte[] parameters = new byte[]{0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
	
	
	static {
		//Security.addProvider(new SunJCE());
		Security.addProvider(new IBMJCE());
	}	
	
	public Crypter(){
		
	}	
	
	private static Crypter crypter;
	
	
	public static Crypter getInstance(){
		if(crypter == null){
			crypter = new Crypter();			
		}
		return crypter;
	}
	
	/**
	 * Encripta un texto con la llave recibida.
	 * 
	 * El texto recibido se completa al proximo multiplo de 16 superior completantolo con espacios para despues
	 * transformado en bytes, mismo que despues es transformado a binario hexadecimal para su encriptación
	 * @param text
	 * @param key
	 * @return
	 * @throws Exception
	 */
	public byte[] encrypt(String text, boolean isTextHex){
		
		try { 
			
			text = UtilsCipher.fitString(text);
			byte[] textByte;
			if(isTextHex){
				textByte = UtilsCipher.fromAscciBinaryToHexBinary(text.getBytes(), 0, text.getBytes().length);
			}else{
				textByte = text.getBytes();
			}
			SecretKeySpec finalKey = new SecretKeySpec(ConfigProperties.getBytesKey(), "AES");	
			boolean noPaddingRequired = "AES".equals(algorithm) && textByte.length % 16 == 0;
        	String transformation = algorithm + "/" + mode + "/" + (noPaddingRequired ? "NoPadding" : padding);        	
        	Cipher cipher = Cipher.getInstance(transformation);        	
        	if (parameters != null) {
        		IvParameterSpec iv = new IvParameterSpec(parameters);
        		cipher.init(Cipher.ENCRYPT_MODE, finalKey, iv);
        	}else{
        		cipher.init(Cipher.ENCRYPT_MODE, finalKey);
        	}      
        	return cipher.doFinal(textByte);            
        }catch (Exception e) {
        	e.printStackTrace();
        	
        }
		return new byte[0];
	}
	
//	public String encrypt(String text, boolean isTextHex){
//		
//		try { 
//			
//			text = UtilsCipher.fitString(text);
//			byte[] textByte;
//			if(isTextHex){
//				textByte = UtilsCipher.fromAscciBinaryToHexBinary(text.getBytes(), 0, text.getBytes().length);
//			}else{
//				textByte = text.getBytes();
//			}
//			SecretKeySpec finalKey = new SecretKeySpec(ConfigProperties.getBytesKey(), "AES");	
//			boolean noPaddingRequired = "AES".equals(algorithm) && textByte.length % 16 == 0;
//        	String transformation = algorithm + "/" + mode + "/" + (noPaddingRequired ? "NoPadding" : padding);        	
//        	Cipher cipher = Cipher.getInstance(transformation);        	
//        	if (parameters != null) {
//        		IvParameterSpec iv = new IvParameterSpec(parameters);
//        		cipher.init(Cipher.ENCRYPT_MODE, finalKey, iv);
//        	}else{
//        		cipher.init(Cipher.ENCRYPT_MODE, finalKey);
//        	}      
//        	//return cipher.doFinal(textByte);            
//        }catch (Exception e) {
//        	e.printStackTrace();
//        	return e.getMessage();
//        }
//		return "";
//	}
	
	public byte[] encrypt(String text){
		return encrypt(text, false);
	}
	
//	public String encrypt(String text){
//		return encrypt(text, false);
//	}

	/**
	 * Desencripta un texto con la llave recibida reconociendo el tipo de texto contenido.
	 * Si el texto es hexadecimal entonces se convierte de ascii a un binario hexadecimal para
	 * realizar la correcto valor.
	 * Si el texto es ascii entonces solo se convierte a binario.
	 * 
	 * Como primer paso se completa el texto con espacios al siguiente multiplo de 16.
	 * 
	 * @param text 
	 * @param key
	 * @return
	 * @throws Exception
	 */
	public String decrypt(String text, boolean isTextHex){		
		text = UtilsCipher.fitString(text);
		byte[] binaryText ;
		if(isTextHex){
			binaryText = UtilsCipher.fromAscciBinaryToHexBinary(text.getBytes(), 0, text.getBytes().length);
		}else{
			binaryText = text.getBytes();
		}
		return decrypt(binaryText);
	}	
	
	/**
	 * Desencripta  un texto ASCII
	 * 
	 * @param text
	 * @param key
	 * @return
	 */
	public String decrypt(String text ){
		return decrypt(text, false);
	}
	
	/**
	 * Desencripta un arreglo de bytes segun la key recibida.
	 * 
	 * @param text
	 * @param key
	 * @return
	 */
	public String decrypt(byte[] text){
		try {			
			SecretKeySpec finalKey = new SecretKeySpec(ConfigProperties.getBytesKey(), "AES");
			boolean noPaddingRequired = "AES".equals(algorithm) && text.length % 16 == 0;
        	String transformation = algorithm + "/" + mode + "/" + (noPaddingRequired ? "NoPadding" : padding);          	
        	Cipher cipher = Cipher.getInstance(transformation);        	
        	if (parameters != null) {
        		IvParameterSpec iv = new IvParameterSpec(parameters);
        		cipher.init(Cipher.DECRYPT_MODE, finalKey, iv);
        	}else{
        		cipher.init(Cipher.DECRYPT_MODE, finalKey);
        	}
        	return new String(cipher.doFinal(text));             
		}catch (Exception e) {
        	e.printStackTrace();
        }		
		return new String();
	}
}
