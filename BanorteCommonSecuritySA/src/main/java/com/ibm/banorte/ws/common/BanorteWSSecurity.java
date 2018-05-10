package com.ibm.banorte.ws.common;

import javax.xml.namespace.QName;

import org.apache.axiom.om.*;
import org.apache.axis2.client.Stub;

public class BanorteWSSecurity {

	public static void addSecurityToHeader(Stub binding, String username, String password) {
		
		OMFactory omFactory = OMAbstractFactory.getOMFactory();
		OMElement omSecurityElement = omFactory.createOMElement(new QName( "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd", "Security", "wsse"), null);

		OMElement omusertoken = omFactory.createOMElement(new QName("http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd", "UsernameToken", "wsu"), null);

		OMElement omuserName = omFactory.createOMElement(new QName("wsuser", "Username", "wsse"), null);
		omuserName.setText(username);

		OMElement omPassword = omFactory.createOMElement(new QName("wspwd", "Password", "wsse"), null);
		omPassword.addAttribute("Type","http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText",null );
		omPassword.setText(password);

		omusertoken.addChild(omuserName);
		omusertoken.addChild(omPassword);
		omSecurityElement.addChild(omusertoken);
		
		binding._getServiceClient().addHeader(omSecurityElement);
	}

}
