package com.ibm.banorte.ws.common;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.regex.Pattern;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.net.ssl.HttpsURLConnection;

import org.apache.wink.json4j.JSONObject;

public class VerifyRecaptcha {
	
	static Logger logger = LogManager.getLogger(VerifyRecaptcha.class.getName());
	
	public static final String secret = "6LcoXQoUAAAAAAY0N0dxiroJGgPzKkPpOJ9lxT_0";

	private final static String USER_AGENT = "Mozilla/5.0";

	public static boolean verify(String gRecaptchaResponse, String host) throws IOException {
		
		String host_captcha = System.getProperty("com.ibm.mfp.ws.host_captcha").toString();
		String url = host_captcha + "api/siteverify";

		logger.info("URL armada desde valores del server-> : " + url);
		
		if (gRecaptchaResponse == null || "".equals(gRecaptchaResponse)) {
			logger.info("gRecaptchaResponse ES VACIA");
			return false;
		}

		try {
			URL obj = new URL(url);
			HttpsURLConnection con = (HttpsURLConnection) obj.openConnection();
			DataOutputStream wr = null;
			String postParams = null;
			// add reuqest header
			try {
				con.setRequestMethod("POST");
				con.setRequestProperty("User-Agent", USER_AGENT);
				con.setRequestProperty("Accept-Language", "en-US,en;q=0.5");

				postParams = "secret=" + secret + "&response=" + gRecaptchaResponse;

				// Send post request
				con.setDoOutput(true);
				wr = new DataOutputStream(con.getOutputStream());
				wr.writeBytes(postParams);
				wr.flush();
			} finally {
				try {
					if (wr != null) {
						wr.close();
					}
				} catch (Exception e) {
					logger.info("VerifyRecaptcha" + e.getMessage());
					logger.info(
							"[VALIDADOR CAPTCHA] - ERROR - Error al cerrar el stream de escritura hacia www.google.com");
				}

			}

			int responseCode = con.getResponseCode();
			logger.info("\nSending 'POST' request to URL : " + url);
			logger.info("Post parameters : " + postParams);
			logger.info("Response Code : " + responseCode);

			// Nueva
			BufferedReader in = null;
			StringBuffer response = new StringBuffer();
			try {
				in = new BufferedReader(new InputStreamReader(con.getInputStream()));
				String inputLine;

				while ((inputLine = in.readLine()) != null) {
					response.append(inputLine);
				}
			} finally {
				if (in != null) {
					try {
						in.close();
					} catch (IOException e) {
						logger.info(
								"[VALIDADOR CAPTCHA] - ERROR - Error al cerrar el stream de lectura desde www.google.com");
						e.printStackTrace();
					}
				}

			}
			// print result
			String rsp = response.toString();

			logger.info(rsp);
			Boolean result = false;
			// Inicia validación de patrón

			String regex = "\\{\\s*\\n*\\s*\"success\":\\s*(false|true),?\\n*\\s*(\"challenge_ts\": .*,?)?\\n*\\s*(\"hostname\": .*,?)?\\n*\\s*(\"error-codes\":\\s*\\[(\\s*\\n*.*)*\\])?\\s*\\n*\\}";
			Pattern.compile(regex);
			if (!Pattern.matches(regex, rsp)) {
				logger.info("La respuesta no corresponde al patron esperado, se regresara falso.");
				return false;
			}
			if (rsp.length() > 250 || rsp.length() < 20) {
				logger.info("La respuesta no se encuentra dentro de los parametros esperados de longitud");
				return false;
			}
			// parse JSON response and return 'success' value
//			JsonReader jsonReader1 = null;
			JSONObject jsonReader = null;
//			JsonObject jsonObject = null;
			try {
				logger.info("Respuesta: " + rsp);
				jsonReader = new JSONObject(rsp);
				// jsonReader = Json.createReader(new StringReader(rsp));
				// jsonObject = jsonReader.readObject();
				// JSONObject jsonObject = jsonReader
				logger.info("JSON Respuesta : " + jsonReader);
				String hostname = jsonReader.getString("hostname");
				if (host.compareTo(hostname) != 0) {
					logger.info("La respuesta no se recibio del servidor esperado");
					return false;
				}

				result = jsonReader.getBoolean("success");
			} finally {
				if (jsonReader != null) {
					try {
						// jsonReader.close();
					} catch (Exception e) {
						logger.info(
								"[VALIDADOR CAPTCHA] - ERROR - Error al cerrar el stream de lectura del Json obtenido para la validación del Captcha");
						
					}
				}
			}
			return result;
		} catch (Exception e) {
			logger.info("==ERROR Captcha: " + e.getMessage());
			return false;
		}
	}
}
