package web_pro;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class WX_plaza_txt
 */
@WebServlet("/WX_plaza_txt")
public class WX_plaza_txt extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public WX_plaza_txt() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String json01="";
	    response.setContentType("text/json;charset=UTF-8");
        response.setCharacterEncoding("UTF-8");
        PrintWriter JsonOut = response.getWriter();
    //-------------------------------------------------------
        request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		String ID=request.getParameter("id");
		System.out.println("IDÎª£º"+ID);
		
		Connection  conn = pub_fun.getConnection();
    	String Sql_str = "select * from wx_plaza where id='"+ID+"'";
    	try {
			PreparedStatement pstat = conn.prepareStatement(Sql_str);
			ResultSet rs = (ResultSet) pstat.executeQuery();
			while(rs.next())  
	            {  
			    json01=json01+"{\"ID\":\""+rs.getString("id")+"\", \"TXT\":\""+rs.getString("plaza_txt")+"\", \"AUTHOR\":\""+rs.getString("plaza_author")+"\",\"IMG\":\""+rs.getString("plaza_img")+"\",\"DAY\":\""+rs.getString("plaza_day")+"\"}";	    
						}  

	        pstat.close();
	        conn.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }
		
    
          System.out.println(json01);
	        JsonOut.println(json01);
	        JsonOut.flush();
	        JsonOut.close();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
