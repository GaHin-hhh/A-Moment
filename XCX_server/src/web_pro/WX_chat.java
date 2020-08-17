package web_pro;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import net.sf.json.JSONObject;

public class WX_chat {
	private String WXtoke="";
	private String WXid="";
	private String touser="";
	private String msgtype="";
    private TextContent text;
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

	public void setWXtoke(String wXtoke) {
		WXtoke = wXtoke;
	}
	
	public void setWXid(String wXid) {
		WXid = wXid;
	}
	
	public String getTouser() {
		return touser;
	}

	public void setTouser(String touser) {
		this.touser = touser;
	}

	public String getMsgtype() {
		return msgtype;
	}

	public void setMsgtype(String msgtype) {
		this.msgtype = msgtype;
	}

	public TextContent getText() {
		return text;
	}

	public void setText(TextContent text) {
		this.text = text;
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
			WXtoke=accessToken;
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
	
	private void sendCustomMessage() throws Exception{
		  //发送消息
        JSONObject text = new JSONObject();
        text.element("content", "内容");
        JSONObject json = new JSONObject();
        json.element("touser", "oe5UkuFDAu0RgtNFrMtgwGkRQ8DQ");
        json.element("text", text);
        json.element("msgtype", "text");



		PrintWriter out = null;
        BufferedReader in = null;
        String result = "";
        String URL_Str="https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=";
		URL_Str = URL_Str.replace("WXtoke",WXtoke);
        try {
            RestTemplate rest = new RestTemplate();
            String postUrl = "https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=WXtoke";
            postUrl = postUrl.replace("WXtoke",WXtoke);
            //推送图文消息
            Message message = new Message();
            message.setTouser(WXid);//普通用户openid
            message.setMsgtype("text");//图文消息（点击跳转到外链）为news
            TextContent text = new TextContent();
            TextContent content = new TextContent();
            content.setContent();//信息
            
            
//        	 URL WX_url=new URL(URL_Str);		    
//		     HttpURLConnection conn = (HttpURLConnection) WX_url.openConnection();
//        	
//           
//            // 设置通用的请求属性
//            conn.setRequestProperty("accept", "*/*");
//            conn.setRequestProperty("connection", "Keep-Alive");
//            conn.setRequestProperty("user-agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
//            // 发送POST请求必须设置如下两行
//            conn.setDoOutput(true);
//            conn.setDoInput(true);
//            // 获取URLConnection对象对应的输出流
//            out = new PrintWriter(conn.getOutputStream());
//            // 发送请求参数
//            out.print(json.toString());
//            // flush输出流的缓冲
//            out.flush();
//            // 定义BufferedReader输入流来读取URL的响应
//            in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
//            String line;
//            while ((line = in.readLine()) != null) {
//                result += line;
//            }
//            System.out.println("客服消息result：" + result);
        } catch (Exception e) {
        	throw e;
        }
    }

	
}
