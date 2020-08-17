<%@ page language="java" contentType="text/html; charset=UTF-8"    pageEncoding="UTF-8"%>
<%@ page import="web_pro.*"%>
<jsp:useBean id="WX_token" scope="page" class="web_pro.WX_token"> </jsp:useBean>

 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<table border='1'>
<tr>
    <th><%=WX_token.getWXtoke() %></th>
    <th><%=WX_token.getExpireTime() %></th>
  </tr>
  <tr>
    <th><%=WX_token.getWXid() %></th>
  </tr>




</table>


 


</body>
</html>