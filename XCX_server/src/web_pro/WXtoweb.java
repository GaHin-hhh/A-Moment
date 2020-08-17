package web_pro;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URL;
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
 * Servlet implementation class WXtoweb
 */
@WebServlet("/WXtoweb")
public class WXtoweb extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Connection conn;
    private PreparedStatement pstat;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public WXtoweb() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
				//response.getWriter().append("Served at: ").append(request.getContextPath());
				response.setContentType("text/html;charset=utf-8");
				request.setCharacterEncoding("utf-8");
				String act_now=request.getParameter("code");
				String isadd=request.getParameter("state");
				String my_openid="DFOid";
				int Oid_start=0,Oid_end=0;
				//HttpSession WX_session = request.getSession(false);
				
				PrintWriter out = response.getWriter();
				//String WX_res="";
				boolean Jump=false;
				//out.println(act_now);
				String URL_Str="https://api.weixin.qq.com/cgi-bin/token?appid=wxfc72f4a593dbe8ca&secret=a17c3b6c86de1de0fe4c48be1be2da37&grant_type=client_credential";
//				String URL_Str="https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxe0664a3c68b0e7ef&secret=23e6fa032797f98f40014ddfb6d1058e&code="+act_now+"&grant_type=authorization_code"; //公众号二次开发
				//out.println(URL_Str);
				try{
				    URL WX_url=new URL(URL_Str);
					java.net.HttpURLConnection WX_conn=(java.net.HttpURLConnection)WX_url.openConnection();
					WX_conn.setConnectTimeout(30000);
					WX_conn.setReadTimeout(30000);
					WX_conn.setDoInput(true);
//					WX_conn.setRequestMethod("POST"); //公众号二次开发
					WX_conn.setRequestMethod("GET");
					WX_conn.connect();
					java.io.BufferedReader WX_in=new java.io.BufferedReader (new java.io.InputStreamReader(WX_conn.getInputStream(),"UTF-8"));
					String line="noData";
					line=WX_in.readLine();
					out.println(line);
//					公众号二次开发
//					Oid_start=line.indexOf("openid")+9;
//					if(Oid_start>0){
//						Oid_end=line.indexOf(",", Oid_start)-1;
//						my_openid=line.substring(Oid_start, Oid_end);
//						//WX_res=my_openid;
//					}
//					out.println(my_openid);
//					公众号二次开发 结束
					WX_in.close();
				}catch(Exception e){
					throw e;
				}
		               
//					if(!"".equals(my_openid)){
//							String sql = "select Xxm from stu_data where Xwxh='"+my_openid+"'";
//				            Connection conn = public_fun.getConnection();
//				            try {
//					            PreparedStatement pstat = conn.prepareStatement(sql);
//					            ResultSet rs = (ResultSet) pstat.executeQuery();
//								while(rs.next())  
//					            {  
//									Jump=true;
//					            }
//								pstat.close();
//						        conn.close();
//				            } catch (SQLException e) {
//				                e.printStackTrace();
//				            }
//						}

				//out.println(WX_res);
//				if(Jump==true){
//				   // response.sendRedirect("./homepage.jsp?Oid="+my_openid);
//				    response.sendRedirect("./mobil.jsp?Oid="+my_openid);
//					//out.println(Jump);
//				}else{
//					response.sendRedirect("./login.jsp?Oid="+my_openid);
//				    //out.println(Jump);
//				}
				//request..getRequestDispatcher("/homepage.jsp").forward(request, response);
			}

			/**
			 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
			 */
			protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
				// TODO Auto-generated method stub
				doGet(request, response);
			}

		}
