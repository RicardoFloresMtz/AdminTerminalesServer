package com.ibm.banorte.security;

import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.ibm.mfp.security.checks.base.UserAuthenticationSecurityCheck;
import com.ibm.mfp.server.registration.external.model.AuthenticatedUser;

public class BanorteCommonSecurityCheck extends UserAuthenticationSecurityCheck {
	
	static Logger logger = LogManager.getLogger(BanorteCommonSecurityCheck.class.getName());
	
	
	private String userId; 
	private String displayName;
	private Map<String, Object> attributes;
		
	@Override
	protected AuthenticatedUser createUser() {
		AuthenticatedUser user = new AuthenticatedUser(userId, displayName, this.getName(), attributes);
		return user;
	}

	@Override
	protected boolean validateCredentials(Map<String, Object> credentials) {
	     if(credentials!=null && credentials.containsKey("usr_ca") && credentials.containsKey("tarjet")){
	         String usr_ca = credentials.get("usr_ca").toString();
	         String tarjet = credentials.get("tarjet").toString();
	         
	         String userLegacy = System.getProperty("com.ibm.mfp.ws.usr_SucAp");
	         logger.info("USER: " + usr_ca);
	         String tarjetLegacy = System.getProperty("com.ibm.mfp.ws.tarjet_SucAp");
	         logger.info("KEY: " + tarjet);
	         
	         if((!usr_ca.isEmpty() && usr_ca.equals(userLegacy)) && (!tarjet.isEmpty() && tarjet.equals(tarjetLegacy))) {
	             userId = usr_ca;
	             displayName = "Banorte";
	             
	             return true;
	         }
	     }
	     return false;
	}

	@Override
	protected Map<String, Object> createChallenge() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public void logout() {
		// TODO Auto-generated method stub
		super.logout();
	}

}
