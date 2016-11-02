<?php
/**接收客户端提交的个人信息，查找个人信息并修改，返回json数据*/
header('Content-Type: text/plain');
//接收客户端提交的数据
$uname = $_REQUEST['uname'];
$bookName=$_REQUEST['bookName'];
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
//根据用户编号进行信息的更新
$sql="select email from jl_user where uid='$uid'";
	$result=mysqli_query($conn,$sql);

	//试着从结果集中抓取一行记录
	$list=mysqli_fetch_all($result,MYSQLI_ASSOC);
	$str=json_encode($list);
	echo $str;
//根据书名查询书编号
$sql="select bid from jl_book where bname='$bookName'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
$bid=intval($row['bid']);
$output['bid']=$bid;
echo $uid;
echo $bid;


//向书架表中插入数据
$sql="INSERT INTO my_bookcase VALUES(NULL,'$uid','$bid')";
mysqli_query($conn, $sql);