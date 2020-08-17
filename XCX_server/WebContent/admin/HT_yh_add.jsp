<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" pageEncoding="UTF-8" />
<title>无标题文档</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
</head>

<body>

	<div class="place">
    <span>位置：</span>
    <ul class="placeul">
    <li><a href="#">首页</a></li>
    <li><a href="#">表单</a></li>
    </ul>
    </div>
    
    <div class="formbody">
    
    <div class="formtitle"><span>基本信息</span></div>
    <form method="post" action="../HT_yh_addok">
    <ul class="forminfo">
    <li><label>用户名</label><input name="yhid" type="text" class="dfinput" /><i>请输入用户名</i></li>
    <li><label>密码</label><input name="keyword" type="text" class="dfinput" /><i>密码不超过20个字符</i></li>
    <li><label>电话号码</label><input name="phone" type="text" class="dfinput" /><i>输入可联系的电话号码</i></li>
    <li><label>&nbsp;</label><input name="" type="submit" class="btn" value="确认保存"/></li>
    </ul>
    </form>
    
    </div>
</body>
</html>
