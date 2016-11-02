<?php
/**接收客户端提交的个人信息，保存入数据库，返回json数据*/
header('Content-Type:application/json;charset=UTF-8');
//接收客户端提交的数据
$uname = $_REQUEST['uname'];
$upwd= $_REQUEST['upwd'];
$email= $_REQUEST['email'];
$phone=$_REQUEST['phone'];
/*
把年月日解析成一个大整数
$birthday=strtotime($birthday)*1000;
*/
if( !$uname || !$upwd){ //若客户端未提交必需的数据
	echo "{}";
	return;	//退出当前PHP页面的执行
}
$conn = mysqli_connect('127.0.0.1','root','','jl',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
//插入数据
$sql="INSERT INTO jl_user VALUES(NULL,'$uname', '$upwd','$email','$phone')";
$result = mysqli_query($conn, $sql);
$output=[];
if($result){ //SQL语句执行失败
	$output['msg']='succ';
	$output['uid']=mysqli_insert_id($conn);
}else {  //SQL语句执行成功
	 $output['msg']='err';
	 $output['sql']=$sql;
}
echo json_encode($output);



