/**
 * Created by bjwsl-001 on 2016/10/31.
 */
/**功能点1：页面加载完后，异步请求公用的页头也页尾**/
$(function(){
  $('div#header').load('../data/header.php');
  $('div#footer').load('../data/footer.php');
});