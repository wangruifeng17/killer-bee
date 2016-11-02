/**
 * Created by bjwsl-001 on 2016/10/25.
 */
$('div#top').on('click','#bt-loginn',function(){
  $('.modal').fadeIn(500);
});
$('#bt-login').click(function(){
  //读取用户的输入——表单序列化
  var inputData = $('#login-form').serialize();
  //异步提交请求，进行验证
  $.ajax({
    type: 'POST',
    url: '../data/login.php',
    data: inputData,
    success: function(txt, msg, xhr){
      if(txt=='ok'){  //登录成功
        $('.modal').fadeOut(300);
        var loginName = $('[name="uname"]').val();
        sessionStorage['loginName']=loginName;
        $('#welcome').html('欢迎回来：'); //修改页头上的欢迎消息
        $('#bt-loginn>a').html(sessionStorage['loginName']);

        $('#bt-loginn>a').css('color','#e9343c').css('font-weight','bold');
        $('#register').css('display','none');

      }else { //登录失败
        $('.modal .alert').html('用户名不存在或密码错误，请重新登录！');
        $('.modal .alert').css('text-align','center');

      }
    }
  });
});