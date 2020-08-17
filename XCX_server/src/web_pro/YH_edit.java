package web_pro;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class YH_edit {
	private int id=0;
	private String yhid="";
	private String log="";
	private String keyword="";
	private String phone="";
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
		 System.out.println("this.id ="+this.id);
	     YH_get(this.id);
	}
	public String getYhid() {
		return yhid;
	}
	public void setYhid(String yhid) {
		this.yhid = yhid;
	}
	public String getLog() {
		return log;
	}
	public void setLog(String log) {
		this.log = log;
	}
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public void YH_get(int yhid){
    	Connection  conn = pub_fun.getConnection();
    	String Sql_str = "select * from yh_data where yhid="+yhid+" ";
    	boolean Oboolean=false;
    	try {
			PreparedStatement pstat = conn.prepareStatement(Sql_str);
			ResultSet rs = (ResultSet) pstat.executeQuery();
			while(rs.next())  
	            {  
				this.setLog(rs.getString("log"));
				this.setKeyword(rs.getString("pwd"));
				this.setPhone(rs.getString("YH_phone"));
				}  
	        pstat.close();
	        conn.close();

 
        } catch (SQLException e) {
            e.printStackTrace();
        }
	}
	
	
}
