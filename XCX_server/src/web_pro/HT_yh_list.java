package web_pro;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class HT_yh_list {
	
	public String yh_list_all(){
    	Connection  conn = pub_fun.getConnection();
    	String Sql_str = "select * from yh_data order by yhid desc";
    	String Ostr="";
    	try {
			PreparedStatement pstat = conn.prepareStatement(Sql_str);
			ResultSet rs = (ResultSet) pstat.executeQuery();
			while(rs.next())  
	            {  
 
		                Ostr=Ostr+"<tr>";
		                Ostr=Ostr+"<td><input name='check' type='checkbox' value='' /></td>"; 
		                Ostr=Ostr+"<td>"+rs.getString("yhid")+"</td>";  
		                Ostr=Ostr+"<td>"+rs.getString("log")+"</td>";  
		                Ostr=Ostr+"<td>"+rs.getString("pwd")+"</td>"; 
		                Ostr=Ostr+"<td>"+rs.getString("YH_phone")+"</td>"; 
		                Ostr=Ostr+"<td><a href='../YH_del?yhid="+rs.getString("yhid")+"' class='tablelink'> 删除</a>";
		                Ostr=Ostr+"<a href='./YH_edit.jsp?yhid="+rs.getString("yhid")+"' class='tablelink'> 修改</a></td>";	
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
