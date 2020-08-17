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
 * Servlet implementation class WX_register
 */
@WebServlet("/WX_register2")
public class WX_register2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
    /**
     * @see HttpServlet#HttpServlet()
     */
    public WX_register2() {
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
		request.setCharacterEncoding("UTF-8");
    	response.setContentType("text/html;charset=utf-8");
    	PrintWriter JsonOut = response.getWriter();
		
    	request.setCharacterEncoding("utf-8");
 		response.setCharacterEncoding("utf-8");
 		
		String plaza_txt = request.getParameter("plaza_txt");
		String plaza_author = request.getParameter("plaza_author");
		String plaza_time = "2019.12.10";
		String plaza_img = "/image/plaza/2.jpg";



		System.out.println(plaza_txt);
		System.out.println(plaza_author);
		System.out.println(plaza_time);
		System.out.println(plaza_img);


	
		Connection  conn = pub_fun.getConnection();
	    String sql = "insert into wx_plaza (plaza_txt,plaza_author,plaza_day,plaza_img)";
	        sql =sql +"values (?,?,?,?)";
	        String Ostr="";
			try {
				
				PreparedStatement pstat = conn.prepareStatement(sql);    
				pstat.setString(1, plaza_txt);	
				pstat.setString(2, plaza_author);
				pstat.setString(3, plaza_time);
				pstat.setString(4, plaza_img);

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
