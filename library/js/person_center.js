/**
 * Created by bjwsl-001 on 2016/10/27.
 */
/**功能点1：页面加载完后，异步请求公用的页头也页尾**/
$(function(){
  $('div#header').load('../data/header.php');
  $('div#footer').load('../data/footer.php');
});

//检测是否已经登录，未登录跳转到登录界面
if(!sessionStorage['loginName']){
  location.href = 'library.html'; //未登录的话跳转到登录页
}
$(function(){
  top_name.innerHTML=sessionStorage['loginName'];
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




/*2.对新密码格式进行验证*/
nupwd.onblur = function(){
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
nupwd.onfocus = function(){
  this.nextElementSibling.innerHTML = '密码长度在8到12位之间';
  this.nextElementSibling.className = 'msg-default';
}

/*对重复密码进行验证*/

qpwd.onfocus=function(){
  this.nextElementSibling.innerHTML = '请确认密码';
  this.nextElementSibling.className = 'msg-default';
}
qpwd.onblur=function(){
  var str=$('#nupwd').val();
  var str1=$('#qpwd').val();
  if(str==str1){
    this.nextElementSibling.innerHTML = '密码正确';
    this.nextElementSibling.className = 'msg-success';
  }else{
    this.nextElementSibling.innerHTML = '前后密码不一致';
    this.nextElementSibling.className = 'msg-error';
  }
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
    url:'../data/person_center_1.php',
    data: inputData,
    success: function(result){
      console.log('开始处理服务器端返回的注册结果');
      //console.log(result);
     alert('更新成功！');
    }
  });
});

//根据用户名加载书架内容
$(function(){
  var uname=sessionStorage['loginName'];
  $.ajax({
    tyoe:'GET',
    url:'../data/person_center.php',
    data:{uname:uname},
    success: function(list,msg,xhr){
      console.log("响应成功");
      var html ='';
      $.each($.parseJSON(list),function(i,stu){
        html+=`
            <div class="book_msg">
              <div class="left"><img src="${stu.bpic}" alt=""/></div>
              <div class="right">
                <p>${stu.bname}</p>
                <p><a href="">开始阅读</a> <a href="">移除书架</a></p>
              </div>
					    `;
      });
      $('.my_bookcase').html(html);
      html="";
    }
  });
});
