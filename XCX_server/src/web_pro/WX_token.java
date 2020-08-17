package web_pro;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import net.sf.json.JSONObject;

public class WX_token {
	
	private String WXtoke="";
	private int ExpireTime=0;
	private String WXid="";
	
	public String getWXtoke() {
		try {
			get_wxtoken() ;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return WXtoke;
	}
	
	public String getWXid() {
		try {
			get_wxid() ;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return WXid;
	}

	public int getExpireTime() {	
		return ExpireTime;
	}

	public void setExpireTime(int expireTime) {
		ExpireTime = expireTime;
	}

	public void setWXtoke(String wXtoke) {
		WXtoke = wXtoke;
	}
	
	public void setWXid(String wXid) {
		WXid = wXid;
		
	}
	
//	private void get_wxtoken() throws Exception {
//		String URL_Str="https://api.weixin.qq.com/cgi-bin/token?appid=wxfc72f4a593dbe8ca&secret=a17c3b6c86de1de0fe4c48be1be2da37&grant_type=client_credential";
//		try{
//		    URL WX_url=new URL(URL_Str);
//			java.net.HttpURLConnection WX_conn=(java.net.HttpURLConnection)WX_url.openConnection();
//			WX_conn.setConnectTimeout(30000);
//			WX_conn.setReadTimeout(30000);
//			WX_conn.setDoInput(true);
//			WX_conn.setRequestMethod("GET");
//			WX_conn.connect();
//			java.io.BufferedReader WX_in=new java.io.BufferedReader (new java.io.InputStreamReader(WX_conn.getInputStream(),"UTF-8"));
//			String line="noData";
//			line=WX_in.readLine();			
//			line=line.substring(17,line.indexOf(",")-1);
//			JSONObject jsonObject = JSONObject.parseObject(line);
//			WXtoke = jsonObject.getString("access_token");
//			WX_in.close();
//			WXtoke=line;
//		}catch(Exception e){
//			throw e;
//		}
//	}
	
	private void get_wxtoken() throws Exception {
		String URL_Str="https://api.weixin.qq.com/cgi-bin/token?appid=wxfc72f4a593dbe8ca&secret=a17c3b6c86de1de0fe4c48be1be2da37&grant_type=client_credential";
		try{
		    URL WX_url=new URL(URL_Str);		    
		     HttpURLConnection connection = (HttpURLConnection) WX_url.openConnection();
	 
		     connection.setRequestMethod("GET");
		     connection.setDoOutput(true);
		     connection.setDoInput(true);
		     connection.connect();
	 
		     //获取返回的字符
		     InputStream inputStream = connection.getInputStream();
		     int size =inputStream.available();
		     byte[] bs =new byte[size];
		     inputStream.read(bs);
		     String message=new String(bs,"UTF-8");
		     
		     //获取access_token
		     JSONObject jsonObject = JSONObject.fromObject(message);
		     String accessToken = jsonObject.getString("access_token");
		     String expires_in = jsonObject.getString("expires_in");
			WXtoke=accessToken;
			ExpireTime=Integer.parseInt(expires_in);
		}catch(Exception e){
			throw e;
		}
	}
	
	private void get_wxid() throws Exception {
		String URL_Str="https://api.weixin.qq.com/cgi-bin/user/get?access_token=WXtoke&next_openid=";
		URL_Str = URL_Str.replace("WXtoke",WXtoke);
		try{
			 URL WX_url=new URL(URL_Str);		    
		     HttpURLConnection connection = (HttpURLConnection) WX_url.openConnection();
	 
		     connection.setRequestMethod("GET");
		     connection.setDoOutput(true);
		     connection.setDoInput(true);
		     connection.connect();
	 
		     //获取返回的字符
		     InputStream inputStream = connection.getInputStream();
		     int size =inputStream.available();
		     byte[] bs =new byte[size];
		     inputStream.read(bs);
		     String message=new String(bs,"UTF-8");
		     
		     //获取access_token
		     JSONObject jsonObject = JSONObject.fromObject(message);
		     JSONObject jsonData = jsonObject.getJSONObject("data");

		     String openid = jsonData.getString("openid");
		     openid=openid.substring(2,openid.length()-2);
		     WXid=openid;
			
		}catch(Exception e){
			throw e;
		}
	}
}
