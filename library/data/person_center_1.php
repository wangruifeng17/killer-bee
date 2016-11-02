<?php
/**接收客户端提交的个人信息，查找个人信息并修改，返回json数据*/
header('Content-Type: text/plain');
//接收客户端提交的数据
$uname = $_REQUEST['uname'];
$nuname=$_REQUEST['nuname'];
$upwd= $_REQUEST['upwd'];
$nupwd= $_REQUEST['nupwd'];
$email= $_REQUEST['email'];
$phone=$_REQUEST['phone'];

if( !$uname || !$upwd){ //若客户端未提交必需的数据
	echo "{}";
	return;	//退出当前PHP页面的执行
}
/*将要向客户端输出对象*/
$out=[
    'msg'=>null,
    'uid'=>0,

];
$conn = mysqli_connect('127.0.0.1','root','','jl',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
//根据用户名和密码查询uid
$sql="select uid from jl_user where uname='$uname' and upwd='$upwd'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
$uid=intval($row['uid']);
$output['uid']=$uid;
//根据用户编号进行信息的更新
$sql="UPDATE jl_user SET uname='$nuname', upwd='$nupwd',email='$email',number='$phone' where uid='$uid'";
$result = mysqli_query($conn, $sql);
if($result===false){ //SQL语句执行失败
	echo 'sqlerr';
}else {  //SQL语句执行成功
	$row = mysqli_fetch_assoc($result);
	if($row){	//读取到一行记录
		echo 'err';
	}else{	//未读取到任何记录
		echo 'ok';
	}
}
