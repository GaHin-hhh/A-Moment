﻿<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
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
    <form method="post" action="../HT_xw_addok">
    <ul class="forminfo">
    <li><label>文章标题</label><input name="topic" type="text" class="dfinput" /><i>标题不能超过30个字符</i></li>
    <li><label>关键字</label><input name="keyword" type="text" class="dfinput" /><i>多个关键字用,隔开</i></li>
    <li><label>是否审核</label><cite><input name="check" type="radio" value="1" checked="checked" />是&nbsp;&nbsp;&nbsp;&nbsp;<input name="check" type="radio" value="0"/>否</cite></li>
    <li><label>引用地址</label><input name="link" type="text" class="dfinput" value="http://www..com/html/uidesign/" /></li>
    <li><label>文章内容</label><textarea name="content" cols="" rows="" class="textinput"></textarea></li>
    <li><label>&nbsp;</label><input name="" type="submit" class="btn" value="确认保存"/></li>
    </ul>
    </form>
    
    </div>
</body>
</html>