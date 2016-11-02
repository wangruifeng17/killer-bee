/**
 * Created by bjwsl-001 on 2016/10/29.
 */
$(function(){
  loaddata('小说');
});

$('#select li a').mousemove(function(event){
  event.preventDefault();
  var type = this.innerHTML;
  if (!type) {
    return;
  }
  console.log(type);
  loaddata(type);
});
  //发起异步请求,获取服务器端返回的JSON数据
  function loaddata(type) {
$.ajax({
    type: 'GET',  //POST/PUT/DELETE/HEAD
    url: '../data/library.php',
    data: {type:type},  //{k:v} 请求数据click
    beforeSend: function(){
      console.log("准备开始响应");
    },//请求发送前的回调
    success: function(list,msg,xhr){
      console.log("响应成功");
      var html ='';
      $.each(list,function(i,stu){
        html+=`
			         <li>
			            <a>
			              <img src="${stu.bpic}" alt=""/>
			            </a>
			            <dl>${stu.bname}</dl>
			            <dd>${stu.introduce}</dd>
			            <span>加入书架</span>

			          </li>


					    `;
      });
      $('#list').html(html);
      html="";
    },	//成功响应的回调
    error: function(){
      alert("响应失败");
    },		//失败响应的回调
    complete: function(){}	//响应完成的回调
  });
}