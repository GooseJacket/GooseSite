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
