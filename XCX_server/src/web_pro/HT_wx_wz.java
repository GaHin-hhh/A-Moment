package web_pro;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
public class HT_wx_wz {
	public String wx_wz_all(){
    	Connection  conn = pub_fun.getConnection();
    	String Sql_str = "select * from wz order by id desc";
    	String Ostr="";
    	try {
			PreparedStatement pstat = conn.prepareStatement(Sql_str);
			ResultSet rs = (ResultSet) pstat.executeQuery();
			while(rs.next())  
	            {  
 
		                Ostr=Ostr+"<tr>";
		                Ostr=Ostr+"<td><input name='check' type='checkbox' value='' /></td>"; 
		                Ostr=Ostr+"<td>"+rs.getString("id")+"</td>";  
		                Ostr=Ostr+"<td>"+rs.getString("latitude")+"</td>";  
		                Ostr=Ostr+"<td></td>";  
		                Ostr=Ostr+"<td>"+rs.getString("longitude")+"</td>";
		                Ostr=Ostr+"<td><a href='../XW_del?xwid="+rs.getString("SPid")+"' class='tablelink'> 删除</a></td>";
		                Ostr=Ostr+ "</tr>";  

						}  
	        pstat.close();
	        conn.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    	//System.out.println(Ostr);
		return Ostr;
	}  
}
