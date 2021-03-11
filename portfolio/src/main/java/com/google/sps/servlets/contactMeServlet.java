package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/contact-me")
public class contactMeServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the value entered in the form.
    String info = getParameter(request, "text-input", "");
    boolean mail = Boolean.parseBoolean(getParameter(request, "email", "false"));
    String text = "";


    if (mail) {
      text = "Email address received!";
    }

    // Print the value so you can see it in the server logs.
    System.out.println("You sent: " + info + " " + text);

    // Write the value to the response so the user can see it.
    response.getWriter().println("You sent: " + info + " " + text);
    
  }


  private String getParameter(HttpServletRequest request, String name, String defaultValue) {
    String value = request.getParameter(name);
    if (value == null) {
      return defaultValue;
    }
    return value;
  }


}