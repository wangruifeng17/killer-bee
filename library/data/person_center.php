<?php
/**接收客户端提交的个人信息，查找个人信息并修改，返回json数据*/
header('Content-Type: text/plain');
//接收客户端提交的数据
$uname = $_REQUEST['uname'];



/*将要向客户端输出对象*/
$out=[
    'msg'=>null,
    'uid'=>0,
    'bid'=>0,

];
$conn = mysqli_connect('127.0.0.1','root','','jl',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
//根据用户名和密码查询uid
$sql="select uid from jl_user where uname='$uname'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
$uid=intval($row['uid']);
$output['uid']=$uid;
//根据uid在表bookcase中查找bid
$sql="select bid from my_bookcase where uid='$uid'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
$bid=intval($row['bid']);
$output['bid']=$bid;
//根据bid在表jl_book中查找bname
$sql="select * from jl_book where bid='$bid'";
$result=mysqli_query($conn,$sql);
$list=mysqli_fetch_all($result,MYSQLI_ASSOC);
	$str=json_encode($list);
	echo $str;
?>