package main.java.com.banorte.cipher;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Random;
import java.util.zip.CRC32;
import java.util.zip.Checksum;

public class UtilsCipher {
	
	public static boolean isNull (Object o){
		if(o == null){
			return true;
		} 
		if(o instanceof String){
			String value = (String) o;
			if (value.trim().length()==0){
				return true;
			}
		}
		return false;
	}
	
	public static boolean isNotNull (Object o){		
		return !isNull(o);
	}
	
	public static void writeLine(String ... line){
		StringBuffer sb = new StringBuffer("");
		for (int i = 0; i < line.length; i++) {
			sb.append(line[i]).append(" ");
		}
		System.out.println(sb.toString());
	}
	
	public static void writeNewLine(String ... newline){
		String[] line = new String[newline.length + 1];
		line[0] = "\n";
		for (int i = 1; i < line.length; i++) {
			line[i] = newline[i-1];
		}
		writeLine(line);
	}
	
	public static String readKeybord(){
		String response = "";
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		try {
            response = reader.readLine();
        } catch (IOException e) {
            
        } 
		return response;
	}
	
	/**
     * Ajusta un String al proximo multiplo de 16 caracteres superior 
     * @param source
     * @return
     */
    public static String fitString(String source) {
    	char charAdding = ' ';
    	int size = 16;
    	int padLength = size - (source.length() % size);
    	if(padLength != 16){
    		for (int i = 0; i < padLength; i++) {
    			source += charAdding;
			}
    	}	 
    	return source;
	}   
    
    
    /**
     * Transforma una cadena a arregleo de byte
     * @param hexString
     * @return
     */
    public static byte[] stringToByte(String hexString) {
    	hexString = fitString(hexString);
    	//hexString = asciiToHex(hexString);
		byte bArray[] = new byte[hexString.length()/2];  
        for(int i=0; i<(hexString.length()/2); i++){
             byte firstNibble  = Byte.parseByte(hexString.substring(2*i,2*i+1),16); // [x,y)
             byte secondNibble = Byte.parseByte(hexString.substring(2*i+1,2*i+2),16);
             int finalByte = (secondNibble) | (firstNibble << 4 ); // bit-operations only with numbers, not bytes.
             bArray[i] = (byte) finalByte;
        }
        return bArray;
	}
    
    
    /**
     * Un arrreglo de bytes es convertido a string
     * 
     * @param input bytes to encode
     * @return string containing hex representation of input byte array
     */
    public static String hexToString(byte[] input){
    	if (input == null || input.length == 0){
            return "";
        }

        int inputLength = input.length;
        StringBuilder output = new StringBuilder(inputLength * 2);

        for (int i = 0; i < inputLength; i++){
            int next = input[i] & 0xff;
            if (next < 0x10){
                output.append("0");
            }
            output.append(Integer.toHexString(next));
        }
        return output.toString().toUpperCase();
    }
    
    /**
     * Convierte una cadena a notacion hexadecimal en bytes y despues la convierte a String
     * @param string
     * @return
     */
    public static String stringToHexString(String string){
    	if(isNull(string)){
    		return null;
    	}    	
    	return hexToString(stringToByte(string));
    }

    
    public  static String asciiToHex(String asciiValue){
        char[] chars = asciiValue.toCharArray();
        StringBuffer hex = new StringBuffer();
        for (int i = 0; i < chars.length; i++)
        {
            hex.append(Integer.toHexString((int) chars[i]));
        }
        return hex.toString();
    }
    
    public static String hexToASCII(String hexValue){
        StringBuilder output = new StringBuilder("");
        for (int i = 0; i < hexValue.length(); i += 2)
        {
            String str = hexValue.substring(i, i + 2);
            output.append((char) Integer.parseInt(str, 16));
        }
        return output.toString();
    }
    
    /**
	 * Convertir una cadena de caracteres asccii que representan hexadecimales al correspondiente arreglo binario hexadecimal
	 * 
	 * @param asciiBinary
	 * @param offset
	 * @param lng
	 * @return
	 */
	public static byte[] fromAscciBinaryToHexBinary(byte[] asciiBinary, int offset, int lng) {
		
		if (asciiBinary == null)
		   return null;
		
		byte[] resultado = new byte[lng / 2];
		
		for (int i = 0; i < lng; i += 2) {			
			
			byte b1 = (byte) Character.digit((char) asciiBinary[i + offset], 16);
			byte b2 = (byte) Character.digit((char) asciiBinary[i + offset + 1], 16);
			
			resultado[i / 2] = (byte) ((b1 << 4) + b2);
			
		}
		resultado.toString();
		return resultado;
	}
	
	/**
	 * Convierte un valor binario a una cadena de d’gitos hexadecimales
	 * 
	 * @param binaryValue
	 * @param offset
	 * @return
	 */
	public static String fromHexBinaryToAsciiBinary(byte[] binaryValue, int offset) {
		
		if (binaryValue == null)
		   return null;
		
		int lng = binaryValue.length - offset;
		char[] resultado = new char[lng * 2];
		
		for (int i = 0; i < lng; i++) {
			resultado[i * 2] = Character.toUpperCase(Character.forDigit((binaryValue[i + offset] & 0xF0) >> 4, 16));
			resultado[i * 2 + 1] = Character.toUpperCase(Character.forDigit(binaryValue[i + offset] & 0x0F, 16));
		}
		return new String(resultado).trim();
	}
	
	/**
	 * Metodo que genera el CRC32 de un binario Ascci.
	 * Dentro del metodo se transforma a un binario Hexadecimal.
	 * 
	 * @param asciiBinary
	 * @return
	 */
	public static String generateCRC32FromAscciBinary(byte[] asciiBinary){
		Checksum checksum = new CRC32();	
		byte[] res= fromAscciBinaryToHexBinary(asciiBinary, 0, asciiBinary.length);
		checksum.update(res, 0, res.length);	
		return String.format("%08X", checksum.getValue());
	}
	
	/**
	 * Genera el CRC32 a partir de un binario en hexadecimal
	 * @param hexBinary
	 * @return
	 */
	public static String generateCRC322(byte[] hexBinary){
		Checksum checksum = new CRC32();	
		checksum.update(hexBinary, 0, hexBinary.length);	
		return String.format("%08X", checksum.getValue());
	}
	
	/**
	 * Genera un numero entero aleatorio y se agrega un prefijo como indicado
	 * @return
	 */
	public static String getNextControlNumber(){
		Random controlNumberGenerator = new Random();
		int nextVal = controlNumberGenerator.nextInt();
		if(nextVal<0){
			nextVal *= -1;
		}
		return ("LAB_INN_" + String.valueOf(nextVal));
	}
	
	public static final int PADDING_LEFT = 1;
	public static final int PADDING_RIGTH = 2;
	public static String padding(String source,int size, char charAdding, int side) {
    	int padLength = size - (source.length() % size);
    	if(padLength != 16){
    		for (int i = 0; i < padLength; i++) {
    			if(side == PADDING_LEFT){
    				source = charAdding + source;
    			}else{
    				source += charAdding;
    			}
    			
			}
    	}	 
    	return source;
	}
	
	public static String createNameTerminal(Integer max){
		String name = String.valueOf(max);
		name = padding(name, 3, '0', PADDING_LEFT);
		name = "T"+ name;
		return name;
	}
}
