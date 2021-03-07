package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import com.google.gson.Gson;


@WebServlet("/welcome")
public class NewServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
    
    

    ArrayList<String> quotes = new ArrayList<String>();
    quotes.add("Do not give up without trying!");
    quotes.add(" I love gaming!");
    quotes.add(" Respect is reciprocal!");
    quotes.add(" Thanks for checking out my portfolio!");
    

    String json = convertToJsonUsingGson(quotes);
    response.setContentType("application/json;");
    response.getWriter().println(json);

    }
    

    private String convertToJsonUsingGson(ArrayList<String> quotes)
    {
        Gson gson = new Gson();
        String json = gson.toJson(quotes);
        return json;
    }

    


}
