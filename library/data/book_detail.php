<?php
//接收客户端提交的书名，查找图书的具体信息，返回json数据
header('Content-Type:application/json;charset=UTF-8');
//接收客户端提交的数据
$bookName=$_REQUEST['bookName'];
//连接数据库
$conn=mysqli_connect("localhost","root","","jl");
	//SQL1: 设置编码方式
    $sql = "SET NAMES UTF8";
    mysqli_query($conn, $sql);

	$sql="select * from jl_book_details where bname='$bookName'";
	$result=mysqli_query($conn,$sql);
	//试着从结果集中抓取一行记录
	$list=mysqli_fetch_all($result,MYSQLI_ASSOC);
	$str=json_encode($list);
	echo $str;
?>