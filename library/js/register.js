/**功能点1：页面加载完后，异步请求公用的页头也页尾**/
$(function(){
  $('div#header').load('../data/header.php');
  $('div#footer').load('../data/footer.php');
});
  /*1.对用户名进行验证*/
uname.onblur = function(){
  if(this.validity.valueMissing){
    this.nextElementSibling.innerHTML = '用户名不能为空';
    this.nextElementSibling.className = 'msg-error';
    this.setCustomValidity('用户名不能为空');
  }else if(this.validity.tooShort){
    this.nextElementSibling.innerHTML = '用户名不能少于6位';
    this.nextElementSibling.className = 'msg-error';
    this.setCustomValidity('用户名不能少于6位');
  }else {
    this.nextElementSibling.innerHTML = '用户名格式正确';
    this.nextElementSibling.className = 'msg-success';
    this.setCustomValidity('');
  }
}
uname.onfocus = function(){
  this.nextElementSibling.innerHTML = '用户名长度在6到9位之间';
  this.nextElementSibling.className = 'msg-default';
}

/*2.对密码格式进行验证*/
upwd.onblur = function(){
  if(this.validity.valueMissing){
    this.nextElementSibling.innerHTML = '密码不能为空';
    this.nextElementSibling.className = 'msg-error';
    this.setCustomValidity('密码不能为空');
  }else if(this.validity.tooShort){
    this.nextElementSibling.innerHTML = '密码不能少于8位';
    this.nextElementSibling.className = 'msg-error';
    this.setCustomValidity('密码不能少于8位');
  }else {
    this.nextElementSibling.innerHTML = '密码格式正确';
    this.nextElementSibling.className = 'msg-success';
    this.setCustomValidity('');
  }
}
upwd.onfocus = function(){
  this.nextElementSibling.innerHTML = '密码长度在8到12位之间';
  this.nextElementSibling.className = 'msg-default';
}

/*3.对邮箱地址进行验证*/
email.onblur = function(){
  if(this.validity.valueMissing){
    this.nextElementSibling.innerHTML = '邮箱不能为空';
    this.nextElementSibling.className = 'msg-error';
    this.setCustomValidity('邮箱不能为空');
  }else if(this.validity.typeMismatch){
    this.nextElementSibling.innerHTML = '邮箱格式不正确';
    this.nextElementSibling.className = 'msg-error';
    this.setCustomValidity('邮箱格式不正确');
  }else {
    this.nextElementSibling.innerHTML = '邮箱格式正确';
    this.nextElementSibling.className = 'msg-success';
    this.setCustomValidity('');
  }
}
email.onfocus = function(){
  this.nextElementSibling.innerHTML = '请输入合法的邮箱地址';
  this.nextElementSibling.className = 'msg-default';
}



/**功能点2：点击登录按钮，异步验证登录信息**/
$('#bt-register').click(function(){
  //表单序列化——获取所有的用户输入
  var inputData = $('#register-form').serialize();
  console.log(inputData);
  //异步提交请求，进行验证
  $.ajax({
    type: 'POST',
    url: '../data/register.php',
    data: inputData,
    success: function(result){
      console.log('开始处理服务器端返回的注册结果');
      //console.log(result);
      if(result.msg==='succ'){
        alert('注册成功！');
        location.href='library.html';
      }else {
        alert('注册失败！')
      }
    }
  });
})