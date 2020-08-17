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
 * Servlet implementation class PG_splist
 */
@WebServlet("/PG_plaza")
public class PG_plaza extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PG_plaza() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String json01="";
	    response.setContentType("text/json;charset=UTF-8");
	    response.setContentType("text/javascript");  
        response.setCharacterEncoding("UTF-8");
        PrintWriter JsonOut = response.getWriter();
    //-------------------------------------------------------

        Connection  conn = pub_fun.getConnection();
    	String Sql_str = "select * from wx_plaza order by id  desc";
    	String Ostr="";
    	try {
			PreparedStatement pstat = conn.prepareStatement(Sql_str);
			ResultSet rs = (ResultSet) pstat.executeQuery();
			Ostr=Ostr+"[";
			while(rs.next())  
	            {  
 
				Ostr=Ostr+"{\"id\":\""+rs.getString("id")+"\", ";
				Ostr=Ostr+"\"plaza_txt\":\""+rs.getString("plaza_txt")+"\", ";
				Ostr=Ostr+"\"plaza_author\":\""+rs.getString("plaza_author")+"\", ";
				Ostr=Ostr+"\"plaza_img\":\""+rs.getString("plaza_img")+"\", ";
				Ostr=Ostr+"\"plaza_day\":\""+rs.getString("plaza_day")+"\"},";



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
