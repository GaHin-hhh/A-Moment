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
 * Servlet implementation class WX_story_comment
 */
@WebServlet("/WX_story_comment")
public class WX_story_comment extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public WX_story_comment() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		//response.getWriter().append("Served at: ").append(request.getContextPath());
				String json01="";
			    response.setContentType("text/json;charset=UTF-8");
		        response.setCharacterEncoding("UTF-8");
		        PrintWriter JsonOut = response.getWriter();
		    //-------------------------------------------------------
		        request.setCharacterEncoding("utf-8");
				response.setCharacterEncoding("utf-8");

				Connection  conn = pub_fun.getConnection();
		    	String Sql_str = "select * from wx_story_comment order by id asc";
		    	String Ostr="";
		    	try {
					PreparedStatement pstat = conn.prepareStatement(Sql_str);
					ResultSet rs = (ResultSet) pstat.executeQuery();
					Ostr=Ostr+"[";
					while(rs.next())  
			            {  

						Ostr=Ostr+"{\"ID\":\""+rs.getString("id")+"\", ";
						Ostr=Ostr+"\"TXT\":\""+rs.getString("txt")+"\", ";
						Ostr=Ostr+"\"NAME\":\""+rs.getString("name")+"\", ";
						Ostr=Ostr+"\"IMG\":\""+rs.getString("img")+"\", ";
						Ostr=Ostr+"\"TIME\":\""+rs.getString("time")+"\"},";

								}  
					Ostr=Ostr+"]";
					Ostr=Ostr.replace("},]", "}]");
			        pstat.close();
			        conn.close();


        } catch (SQLException e) {
            e.printStackTrace();
        }
		
    
          System.out.println(Ostr);
	        JsonOut.println(Ostr);
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
