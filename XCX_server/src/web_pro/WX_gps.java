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
 * Servlet implementation class WX_gps
 */
@WebServlet("/WX_gps")
public class WX_gps extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
    /**
     * @see HttpServlet#HttpServlet()
     */
    public WX_gps() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		doPost(request, response);
	        
		}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("UTF-8");
    	response.setContentType("text/html;charset=utf-8");
    	PrintWriter JsonOut = response.getWriter();
		
    	request.setCharacterEncoding("utf-8");
 		response.setCharacterEncoding("utf-8");
 		
		String lat1 = request.getParameter("lat1");
		String lng1 = request.getParameter("lng1");

		System.out.println(lat1);
		System.out.println(lng1);
	
		Connection  conn = pub_fun.getConnection();
	    String sql = "insert into gps (latitude,longitude)";
	        sql =sql +"values (?,?)";
	        String Ostr="";
			try {
				
				PreparedStatement pstat = conn.prepareStatement(sql);    
				pstat.setString(1, lat1);	
				pstat.setString(2, lng1);
				pstat.executeUpdate();
		        pstat.close();
		        conn.close();
		        
/*				PreparedStatement pstat=conn.prepareStatement(sql);
				ResultSet rs=(ResultSet)pstat.executeQuery();
				if(rs.next())
				{
					Ostr= "{\"code\":200,\"message\":\"成功\",\"date\":1504785964984}";
				}
				else {
					Ostr="{\"loginok\":\"用户名或密码错误\"}";
				}
				pstat.close();
				conn.close();*/
				
			}catch(SQLException e) {
				e.printStackTrace();
	        }
			
			System.out.println(Ostr);
	        JsonOut.println(Ostr);
	        JsonOut.flush();
	        JsonOut.close();
		

	}
}
