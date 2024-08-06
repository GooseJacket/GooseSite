function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function LD(){
        if(getCookie("style") == "../../darkMode.css")
        {setCookie("style", "../../lightMode.css", 365);}
        else{setCookie("style", "../../darkMode.css", 365);}
      }  
function setStyleSheet(url){
   var stylesheet = document.getElementById("stylesheet");
   stylesheet.setAttribute('href', url);
   localStorage.setItem("LD-mode", url);
}
document.addEventListener('DOMContentLoaded', function() {
  let LD = getCookie("style");
  if (LD == "") setCookie("style", "../../lightMode.css", 365);
  else setStyleSheet(LD);
}, false);
