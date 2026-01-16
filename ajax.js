function postAjax(x,url,data,f){
  f = f || function() {};
  x.onreadystatechange = x.onreadystatechange || function(){
    if ((x.readyState == 4) && (x.status == 200)){
      f(x.responseText);
      var r = JSON.parse(x.responseText);
      if (r.next){
        if ((document.location.href.match(r.next)) || (r.next == ".")){
          document.location.reload();
        } else {
          document.location = r.next;
        }
      }
      if (r.error){
        alert(r.error);
      }
    }
  }
  x.open("POST",url);
  x.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  x.send(data);
}

function newAjax(){
  return new XMLHttpRequest();
}