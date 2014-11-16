package com.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.manager.ComputerManager;
import com.manager.DictionaryManager;
import com.model.Movement;

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author RMarquezR
 */
public class Ghost extends HttpServlet {
    private static final long serialVersionUID = 1L;
    
    private static final Integer MIN_LETTERS = new Integer(4);
    
    
    public Ghost() {
        super();
    }
    
    /**
     * 
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException 
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
    
    /**
     * 
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        JsonObject json = new JsonObject();
        PrintWriter out = response.getWriter();
        response.setContentType("text/html");
        response.setHeader("Cache-control", "no-cache, no-store");
        response.setHeader("Pragma", "no-cache");
        response.setHeader("Expires", "-1");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST,GET");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setHeader("Access-Control-Max-Age", "86400");
        
        String action = null;
        
        try {
            action = request.getParameter("action");
        
            if (action.equals("PLAYER_MOVE")) {
            	
            	Gson gs = new  Gson();
            	
            	Movement movement = new Movement();
            	movement = (Movement) gs.fromJson(request.getParameter("movement"), Movement.class); 
            	
            	ComputerManager computerMgr = new ComputerManager();
            	String path = getServletContext().getRealPath("/") + "app\\data\\";
            	DictionaryManager dictionaryMgr = new DictionaryManager(path);
            	
            	Movement movementResult = computerMgr.nextMovement(dictionaryMgr.getDictionary(), movement);
        		
        		String movementResultJson = gs.toJson(movementResult);
        		out.print(movementResultJson);
        		out.close();
            	
            }
            
        } catch (Exception ex) {
            try {
                ex.printStackTrace();
                throw ex;
            } catch (Exception ex1) {
            }
        }
        
    }
    
}
