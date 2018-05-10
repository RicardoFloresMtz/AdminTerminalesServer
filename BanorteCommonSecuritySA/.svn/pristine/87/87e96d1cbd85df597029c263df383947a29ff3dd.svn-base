package com.ibm.banorte.ws.common;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

import org.apache.axiom.om.OMElement;
import org.apache.axis2.AxisFault;
import org.apache.axis2.builder.Builder;
import org.apache.axis2.builder.SOAPBuilder;
import org.apache.axis2.context.MessageContext;
import org.apache.commons.io.output.ByteArrayOutputStream;

public class SoapBuilderWrapper implements Builder {
	
    private String lastResponse;
    private SOAPBuilder builder = new SOAPBuilder();
    private static final int BUFFER_SIZE = 8192;
	private ByteArrayOutputStream copiedStream;

    public OMElement processDocument(InputStream inputStream, String contentType, MessageContext messageContext) throws AxisFault {
        copiedStream = new ByteArrayOutputStream();
        try {
            byte[] buffer = new byte[BUFFER_SIZE];
            int bytesRead = inputStream.read(buffer);
            while (bytesRead > -1) {
                copiedStream.write(buffer, 0, bytesRead);
                bytesRead = inputStream.read(buffer);
            }
            lastResponse = copiedStream.toString();

        } catch (IOException e) {
            throw new AxisFault("Can't read from input stream", e);
        }
        return builder.processDocument(
                new ByteArrayInputStream(copiedStream.toByteArray()),
                contentType, messageContext);
    }

    public String getLastResponse() {
        return lastResponse;
    }

}