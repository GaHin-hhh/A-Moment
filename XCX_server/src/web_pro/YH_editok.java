package web_pro;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class YH_editok
 */
@WebServlet("/YH_editok")
public class YH_editok extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public YH_editok() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		doGet(request, response);
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
    	response.setContentType("text/html;charset=utf-8");
    	String yhid = request.getParameter("yhid");
		String log = request.getParameter("log");
		String keyword = request.getParameter("pwd");
		
		Connection  conn = pub_fun.getConnection();
		PreparedStatement stmt = null;
		String sql="update yh_data set ped=?,YH_phone=? where yhid=?";
        try {
			stmt = conn.prepareStatement(sql);
			stmt.setString(1,yhid);
	        stmt.setString(2,log);
	        stmt.setString(3,keyword);
	        stmt.executeUpdate();
	        System.out.println(" Update success");
		}  catch (SQLException e) {
	           e.printStackTrace();
	        }
			
			
			request.setCharacterEncoding("UTF-8");
	    	response.setContentType("text/html;charset=utf-8");
	    	String alertstr = "操作已经完成";
	    	response.getWriter().append("<script>alert('新闻修改已完成');window.location.href=\"./admin/HT_yh_list.jsp\";</script>");
	}

}
