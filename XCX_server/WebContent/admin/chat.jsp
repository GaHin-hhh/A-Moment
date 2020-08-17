<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="web_pro.*"%>
<jsp:useBean id="WX_chat" scope="page" class="web_pro.WX_chat"> </jsp:useBean>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
 <style>
 *{
    margin: 0;
    padding: 0;
} 
html,body{
    height: 100vh;
    width:100%;
    overflow:hidden;
}
#header {
    background-color:black;
    color:white;
    text-align:center;
    padding:30px;
    margin-bottom:20px;
    
}
 #container{
    /*保证footer是相对于container位置绝对定位*/
    position:relative;  
    width:100%;
    min-height:100%; 
    /*设置padding-bottom值大于等于footer的height值，以保证main的内容能够全部显示出来而不被footer遮盖；*/  
    /* padding-bottom: 100px;   */
    box-sizing: border-box;
    background: url(../pic/backgroud.JPG);
    background-size: 100% 100%;
} 
#footer {
    background-color:black;
    color:white;
    clear:both;
    text-align:center;
    padding:10px; 
    width: 100%;
    height:50px;   /* footer的高度一定要是固定值*/ 
    position:absolute;
    bottom:0px;
    
}
select{ //清除select的边框样式
            border: 2px; //清除select聚焦时候的边框颜色
            outline: none; //将select的宽高等于div的宽高
            width: 120px;
            height: 40px;
            line-height: 40px; //隐藏select的下拉图标
            border-radius:5px;
            padding:5px;
            font-size:20px;
 }
.frm_control_group{
     margin-right:20px;
     margin-bottom:50px;
     font-size:25px;
     color: #fff;
}
textarea{
 border:15px solid #d6e4f0;
 margin-bottom:40px;
 padding:20px;
 font-size: 30px;
 resize:none;
  border-radius: 20px;
  outline: none;
}
.button{
    width: 40%;
    font-size: 40px;
    color: #393e46;
    background-color: #d6e4f0;
    border:none;
    border-radius: 5px;
    outline: none;
    height: 80px;
}
.div1{
          
            justify-content:center;
            align-items:Center;
        }

</style>
<body>
<div id="container">
<div id="header">
<h1>客服中心</h1>
</div>

<div style = "text-align:center;margin-top:30%">
  <div class="frm_control_group">
  <label class="frm_control_group">发送类型：</label>
  <select>
  <option>发送文字</option>
  <option>上传图片</option>
  </select>
  </div>
  
  <div > 
    <form>
      <textarea rows="20" cols="40" data-type="content" required="true" placeholder="请输入要发送的内容"></textarea>
      <br>
      <input class="button" type='submit' value='发   送'/>
    </form>
  </div>
</div>


<div id="footer">
Copyright Cheers Cheese.com
</div>
</div>
 <!-- <style>
            .container{width: 100%;height: 100vh;background: url(../pic/backgroud.JPG);background-size: 100% 100%; }
            .col_flex{display: flex;flex-direction: column;justify-content: center;align-items: center;}
            .row_flex{display: flex;justify-content: center;align-items: center;}
            .bg{background: rgb(0, 0, 0,0.5);width: 100%;height: 100%;}
            .txt_welcome{width: 100%;height: 30%;padding:0 0 20px 0}
            .txt_token{ width: 80%;height: 15%;color: white;font-size: 32px;word-break:break-all;}
            .txt_time{ width: 80%;height: 10%;color: white;font-size: 32px;}
            .welcome{color: white;font-size: 70px;padding: 20px 0;}
        </style>
    </head>
    <body>
       <div class="container">
            <div class="bg col_flex">
                <div class="txt_welcome col_flex">
                    <div class="welcome" >Welcome To</div>
                    <div class="welcome" style="font-size: 100px;">Cheers Cheese</div>
                </div>
                <div class="txt_token row_flex"><a>Token:</a></div>
                <div class="txt_time row_flex">ExpireTime:</div>

            </div>

       </div>


</body> -->
</html>