<?php
/**根据客户端提交的页面编号，向客户端分页输出产品列表，以JSON格式：{ ... }**/
header('Content-Type: application/json;charset=UTF-8');

//接收客户端提交的数据
$type=$_REQUEST['type'];

$conn=mysqli_connect("localhost","root","","jl");
	//SQL1: 设置编码方式
    $sql = "SET NAMES UTF8";
    mysqli_query($conn, $sql);

	$sql="select * from jl_book where bclass='$type'";
	$result=mysqli_query($conn,$sql);
	//试着从结果集中抓取一行记录
	$list=mysqli_fetch_all($result,MYSQLI_ASSOC);
	$str=json_encode($list);
	echo $str;
?>