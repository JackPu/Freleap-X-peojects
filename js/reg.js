/**
** some useful reg-exp...eg url,e-mail,telphone etc.
**/

//test chinese characters 
var str = '我是说中文的';
if(/[\u4E00-\u9FA5]+/g.test(str)){
  return true;
}

// test iOS device
/(iPad|iPhone|iPod)/g.test( navigator.userAgent );
