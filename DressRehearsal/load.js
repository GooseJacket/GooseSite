function loadData(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.open("GET", "cardSets/"+filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }

  result = result.split("\n");

  let ret = [];
  
  for(let i = 0; i < result.length; i++){
      if(result[i] != "" && result[i] != null && result[i] != undefined){
        if(result[i].split("UND").length > 1){
          ret.push(result[i].split("UND"));
        }
      }
  }

  return ret;
}

function compare(a, b){
  let equiv = ["ae", "ä","Ae", "Ä",  
               "oe", "ö", "Oe", "Ö",
               "ue", "ü", "Ue", "Ü",
               "ss", "ß", 
               "_", "-",
               "_", " ",
               "", "the_"];
  //window.alert(a + " " + b)
  if(a === b){return true;}
  for(let i = 0; i < equiv.length; i+=2){
      a = a.replaceAll(equiv[i+1], equiv[i]);
      b = b.replaceAll(equiv[i+1], equiv[i]);
  }
  if(a === b){return true;}
  while(a.includes("(") && a.includes(")") && a.indexOf("(") < a.indexOf(")")){
    a = a.replaceAll("_(", "(")
    a = a.replaceAll(")_", ")");
    let temp = a.split("(");
    temp[1] = temp[1].split(")")[1];
    a = temp.join("");
  }
  while(b.includes("(") && b.includes(")") && b.indexOf("(") < b.indexOf(")")){
    b = b.replaceAll("_(", "("); 
    b = b.replaceAll(")_", ")");
    let temp = b.split("(");
    temp[1] = temp[1].split(")")[1];
    b = temp.join("");
  }//window.alert(a + ":" + b)
  if(a === b){return true;}
  return false;
}

function getCookie(cname) { //general function that grabs cookie from server
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

function warn(){
  if(document.getElementById('log in babe') == null){
    let warning = "<div class='bigTile' id='log in babe'><h1>Warning: You are not logged in!</h1>Your name won't be on the results screens for homework checks.<br> <a href='logIn.html'><button>Log In</button></a><button onclick=hide();>Dismiss</button></div>"
    document.body.innerHTML = warning + document.body.innerHTML;
  }
}
function hide(){
  if(document.getElementById('log in babe')){
    document.getElementById('log in babe').remove();
  }
}

function populateDataVariable(){ //data getCookie
  let u = getCookie("username");
  if(u == ""){warn();}
  let d = getCookie("dataSheet");
  //window.alert(d);
  if (d==""){
    window.alert("No data sheet selected!");
    window.location.replace("https://goosejacket.github.io/GooseSite/DressRehearsal/chooseSet.html");
  }
  else
    return loadData(d);
  }  
