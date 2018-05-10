package com.ibm.banorte.ws.common;

import java.util.Iterator;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.xml.namespace.QName;
import org.apache.axiom.om.OMElement;
import org.apache.axiom.om.impl.llom.OMElementImpl;
import org.apache.axis2.AxisFault;
import org.apache.axis2.context.MessageContext;
import org.apache.axis2.engine.AxisConfiguration;
import org.apache.axis2.wsdl.WSDLConstants;
import org.apache.wink.json4j.JSONException;
import org.apache.wink.json4j.JSONObject;

public abstract class BanorteService {
	
	protected static final String PROPERTY_HOST_ESB = "com.ibm.mfp.ws.servers.busHost1";
	protected static final String PROPERTY_USER_WSS = "com.ibm.mfp.ws.usr_caLegacy";
	protected static final String PROPERTY_PASS_WSS = "com.ibm.mfp.ws.tarjetLegacy";
	
	protected static final String PROPERTY_ENVIO_A = "com.ibm.mfp.ws.EnvioA";
	protected static final String PROPERTY_ENVIO_B = "com.ibm.mfp.ws.EnvioB";
	protected static final String PROPERTY_RELTAR_A = "com.ibm.mfp.ws.RelTarA";
	protected static final String PROPERTY_RRELTAR_B = "com.ibm.mfp.ws.RelTarB";
	protected static final String PROPERTY_BML_A = "com.ibm.mfp.ws.BMLA";
	protected static final String PROPERTY_BML_B = "com.ibm.mfp.ws.BMLB";
	
	protected static String CONTEXT;
	protected static String HOST;
	protected static String USER_WSS;
	protected static String PASS_WSS;
	protected static Boolean ADD_WSS_HEADER = Boolean.FALSE;
	protected static String ID_SERVICIO;
	protected static String CR;
	protected static String ID_SESSION;
	protected static String ID_OPERACION;
	protected static String ID_USUARIO = "AUTOSERVICIO";
	protected static String ID_APLICACION = "PORTAUT";
	protected SoapBuilderWrapper responseCaptor;
	protected org.apache.axis2.client.Stub stub;
	
	static Logger logger = LogManager.getLogger(BanorteService.class.getName());

	@SuppressWarnings("rawtypes")
	public String getParamsHeader(OMElement elementHeader) throws JSONException {
		JSONObject jsonObject = new JSONObject();

		Iterator it = elementHeader.getDescendants(false);
		while (it.hasNext()) {
			Object value = it.next();
			if ((value instanceof OMElementImpl)) {
				OMElementImpl ome = (OMElementImpl) value;
				if (ome.localName.equals("EstadoRespuesta")) {
					Iterator childElements = ome.getChildElements();
					while (childElements.hasNext()) {
						Object object = childElements.next();
						if ((object instanceof OMElement)) {
							OMElement element = (OMElement) object;
							QName elementQname = element.getQName();
							if (elementQname.toString().equals("Id")) {
								jsonObject.put("Id", element.getText());
							}
							if (elementQname.toString().equals("MensajeAUsuario")) {
								jsonObject.put("MensajeAUsuario", element.getText());
							}
							if (elementQname.toString().equals("MensajeDetallado")) {
								jsonObject.put("MensajeDetallado", element.getText());
							}
							
						}
					}
				}
				if(ome.localName.equals("NumReferencia")){
					jsonObject.put("NumReferencia", ome.getText());
					
				}
			}
		}
		return jsonObject.toString();
	}
	
	public void initLog(org.apache.axis2.client.Stub stub){
		responseCaptor = new SoapBuilderWrapper();
		AxisConfiguration axisConfig = stub._getServiceClient().getAxisConfiguration();
		axisConfig.addMessageBuilder("application/soap+xml", responseCaptor);
		axisConfig.addMessageBuilder("text/xml", responseCaptor);
	}
	
	public void logResponse(){
		logger.info("RESPONSE: " + responseCaptor.getLastResponse());
	}
	
	public void logRequest(){
		MessageContext message;
		try {
			message = stub._getServiceClient().getLastOperationContext().getMessageContext(WSDLConstants.MESSAGE_LABEL_OUT_VALUE);
			logger.info("REQUEST: " + message.getEnvelope());
		} catch (AxisFault e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			logger.info("Ocurrio un error al obtener el response del servicio web, probablementela invocacion fallo, verificar stacktrace");
		}
		
	}
}
