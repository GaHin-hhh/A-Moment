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
@WebServlet("/WX_register")
public class WX_register extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
    /**
     * @see HttpServlet#HttpServlet()
     */
    public WX_register() {
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
 		
		String registerName = request.getParameter("registerName");
		String registerPhone = request.getParameter("registerPhone");
		String registerEmail = request.getParameter("registerEmail");
		String registerPsd2 = request.getParameter("registerPsd2");

		System.out.println(registerName);
		System.out.println(registerPhone);
		System.out.println(registerEmail);
		System.out.println(registerPsd2);

		
		Connection  conn = pub_fun.getConnection();
	    String sql = "insert into yh_data (log,YH_phone,YH_Email,pwd)";
	        sql =sql +"values (?,?,?,?)";
	        String Ostr="";
			try {
				
				PreparedStatement pstat = conn.prepareStatement(sql);    
				pstat.setString(1, registerName);	
				pstat.setString(2, registerPhone);
				pstat.setString(3, registerEmail);
				pstat.setString(4, registerPsd2);
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
