<?php
/**接收客户端提交的用户名和密码，验证是否正确，向客户端输出ok或err**/
header('Content-Type: text/plain');

$uname = $_REQUEST['uname'];
$upwd = $_REQUEST['upwd'];

//连接数据库
if( !$uname || !$upwd){ //若客户端未提交必需的数据
	echo "{}";
	return;	//退出当前PHP页面的执行
}
$conn = mysqli_connect('127.0.0.1','root','','jl',3306);

//提交SQL
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);
$sql = "SELECT uid FROM jl_user WHERE uname='$uname' AND upwd='$upwd'";
$result = mysqli_query($conn, $sql);
if($result===false){ //SQL语句执行失败
	echo 'sqlerr';
}else {  //SQL语句执行成功
	$row = mysqli_fetch_assoc($result);
	if($row){	//读取到一行记录
		echo 'ok';
	}else{	//未读取到任何记录
		echo 'err';
	}
}