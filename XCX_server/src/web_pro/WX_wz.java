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
 * Servlet implementation class WX_wz
 */
@WebServlet("/WX_wz")
public class WX_wz extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public WX_wz() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		response.getWriter().append("Served at: ").append(request.getContextPath());
		  response.setContentType("text/json;charset=UTF-8");
	        response.setCharacterEncoding("UTF-8");
	        PrintWriter JsonOut = response.getWriter();
	    //-------------------------------------------------------
	        request.setCharacterEncoding("utf-8");
			response.setCharacterEncoding("utf-8");
			String latitude = request.getParameter("latitude");
			String longitude = request.getParameter("longitude");
			System.out.println(latitude);
			System.out.println(longitude);
			
			
			Connection  conn = pub_fun.getConnection();
	    	String Sql_str = "insert into wz (latitude,longitude)";
	    	Sql_str =Sql_str +"values (?,?)";
	    	String Ostr="";
	    	try {
				PreparedStatement pstat = conn.prepareStatement(Sql_str);
				ResultSet rs = (ResultSet) pstat.executeQuery();
				if(rs.next())  
	            {  
				
					Ostr="{\"code\":200,\"message\":\"成功\",\"date\":1504785964984}";
				}else{
					Ostr="{\"loginok\":\"用户名或密码错误,请重新填写\" }";
				}


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
