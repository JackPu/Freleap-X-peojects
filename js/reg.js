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


var url= "https://www.google.com";
if(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(url)) {
  return true;
  
}


window.getSearch = function(variable) {
  var parsedSearch;
  parsedSearch = window.parsedSearch || (function() {
    var match, re, ret;
    re = /\??(.*?)=([^\&]*)&?/gi;
    ret = {};
    while (match = re.exec(document.location.search)) {
      ret[match[1]] = match[2];
    }
    return window.parsedSearch = ret;
  })();
  return parsedSearch[variable];
};
