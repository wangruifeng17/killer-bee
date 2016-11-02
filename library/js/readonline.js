/**
 * Created by bjwsl-001 on 2016/10/29.
 */
$(function(){
  $('div#header').load('../data/header.php');
  $('div#footer').load('../data/footer.php');
});
//检测是否已经登录，未登录跳转到登录界面
if(!sessionStorage['loginName']){
  location.href = 'library.html'; //未登录的话跳转到登录页
}else{
  var uname=sessionStorage['loginName'];
  console.log(uname);
}

/**功能点2：点击登录按钮，异步提交信息**/
$('span.join_bookcase').click(function(){
  var bookName=this.previousElementSibling.previousElementSibling.innerHTML;
  console.log(bookName);
  //异步提交请求，进行数据记录
  $.ajax({
    type: 'POST',
    url:'../data/person_center_2.php',
    data:{uname: sessionStorage['loginName'],bookName:bookName},
    success: function(result){
      console.log('开始处理服务器端返回的注册结果');
      //console.log(result);
      alert('更新成功！');
    }
  });
});
//点击查看书籍，跳转到相应页面并获取书名
$('.check_book').click(function(){
  var bookName =this.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
  sessionStorage['bookName']=bookName;
});