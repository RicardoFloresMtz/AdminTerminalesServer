/*
 *    Licensed Materials - Property of IBM
 *    5725-I43 (C) Copyright IBM Corp. 2015, 2016. All Rights Reserved.
 *    US Government Users Restricted Rights - Use, duplication or
 *    disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

package com.ibm.banorte.web;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import main.java.com.banorte.bd.*;

import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

import javax.naming.CommunicationException;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.apache.wink.json4j.JSONException;

import com.ibm.mfp.adapter.api.ConfigurationAPI;
import com.ibm.mfp.adapter.api.OAuthSecurity;
import com.ibm.mfp.server.security.external.resource.AdapterSecurityContext;

@Api(value = "Adapter Admin Terminales")
@Path("/resource")
public class AdapterBanorteAdminTerminalesResource {
	
	static Logger logger = Logger.getLogger(AdapterBanorteAdminTerminalesResource.class.getName());

	@Context
	ConfigurationAPI configApi;

	@Context
	AdapterSecurityContext securityContext;

	@Context
	private HttpServletRequest request;
	
	//TODO
		@ApiOperation(value = "Returns 'Hello from resource'", notes = "A basic example of a resource returning a constant string.")
		@ApiResponses(value = { @ApiResponse(code = 200, message = "Hello message returned") })
		@POST
		@Produces(MediaType.TEXT_PLAIN)
		@OAuthSecurity(scope = "banorteSecurityCheckSa")
		@Path("/getAcceso")
		public String getAcceso(
				@FormParam("type") String type,
				@FormParam("usr") String usr,
				@FormParam("key") String key
				) throws JSONException  {
			
			String respLogin = null;
			Login login = new Login();
				
			respLogin = login.accesa(type, usr, key);
			
			return respLogin;
		}
	//TODO
	@ApiOperation(value = "Returns 'Hello from resource'", notes = "A basic example of a resource returning a constant string.")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Hello message returned") })
	@POST
	@Produces(MediaType.TEXT_PLAIN)
	@OAuthSecurity(scope = "banorteSecurityCheckSa")
	@Path("/getRegistros")
	public String getRegistros() throws JSONException  {
		
		String registros = null;
		Data data = new Data();
		ConexionDS conexionDs = new ConexionDS();
		Connection con = conexionDs.ConenctarDB();
			
			if(con == null){
				registros = "No pudo realizarse la conexion";
			}else{
				
				registros = data.getRegistros(con);
				//registros = data.getSucurSalIdLegacy(con);
			}
		
		return registros;
	}
	
	//TODO
		@ApiOperation(value = "Returns 'Hello from resource'", notes = "A basic example of a resource returning a constant string.")
		@ApiResponses(value = { @ApiResponse(code = 200, message = "Hello message returned") })
		@POST
		@Produces(MediaType.TEXT_PLAIN)
		@OAuthSecurity(scope = "banorteSecurityCheckSa")
		@Path("/setUpdateCrStatus")
		public String setUpdateCrStatus(
				@FormParam("terminal_id") String terminal_id,
				@FormParam("sucursal_id") String sucursal_id,
				@FormParam("activo") String activo) throws JSONException  {
			
			String registros = null;
			Data data = new Data();
			ConexionDS conexionDs = new ConexionDS();
			Connection con = conexionDs.ConenctarDB();
				
				if(con == null){
					registros = "No pudo realizarse la conexion";
				}else{
					
					registros = data.setUpdateCrStatus(con, terminal_id, sucursal_id, activo);
				}
			
			return registros;
		}
		
		//TODO
				@ApiOperation(value = "Returns 'Hello from resource'", notes = "A basic example of a resource returning a constant string.")
				@ApiResponses(value = { @ApiResponse(code = 200, message = "Hello message returned") })
				@POST
				@Produces(MediaType.TEXT_PLAIN)
				@OAuthSecurity(scope = "banorteSecurityCheckSa")
				@Path("/insertaUserPassLegacy")
				public String insertaUserPassLegacy(
						@FormParam("usrLegacy") String usrLegacy,
						@FormParam("passLegacy") String passLegacy,
						@FormParam("idTerminal") String idTerminal
						) throws JSONException  {
					
					String registros = null;
					Data data = new Data();
					ConexionDS conexionDs = new ConexionDS();
					Connection con = conexionDs.ConenctarDB();
						
						if(con == null){
							registros = "No pudo realizarse la conexion";
						}else{
							
							registros = data.insertaUserPassLegacyData(con, usrLegacy, passLegacy, idTerminal);
						}
					
					return registros;
				}
		
				//TODO
				@ApiOperation(value = "Returns 'Hello from resource'", notes = "A basic example of a resource returning a constant string.")
				@ApiResponses(value = { @ApiResponse(code = 200, message = "Hello message returned") })
				@POST
				@Produces(MediaType.TEXT_PLAIN)
				@OAuthSecurity(scope = "banorteSecurityCheckSa")
				@Path("/insertaUserPassLegacyDataMasiva")
				public String insertaUserPassLegacyMasiva(
						@FormParam("idTerminal") String idTerminal,
						@FormParam("registros") String registros
						) throws JSONException  {
					
					String resp = null;
					Data data = new Data();
					ConexionDS conexionDs = new ConexionDS();
					Connection con = conexionDs.ConenctarDB();
						
						if(con == null){
							resp = "No pudo realizarse la conexion";
						}else{
							
							resp = data.insertaUserPassLegacyDataMasiva(con, idTerminal, registros);
						}
					
					return resp;
				}

}
