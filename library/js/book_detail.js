/**
 * Created by bjwsl-001 on 2016/10/31.
 */
//检测是否接收到书名bookName，未接收则跳转到readonline界面
if(!sessionStorage['bookName']){
  location.href = 'readonline.html'; //未登录的话跳转到登录页
}
//页面加载完成
//根据用户提交的书名，输出书籍的详细信息
$(function(){
  var bookName=sessionStorage['bookName'];
  console.log(bookName);
  $.ajax({
    type:'GET',
    url:'../data/',
  });
});
