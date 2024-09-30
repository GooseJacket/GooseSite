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
      if(result[i] != ""){
        //if(result[i].includes("UND")){
          result[i] = result[i].split("UND");
        //}else{
        //  ret.push(result[i]);
        }
      }
  }
  window.alert(result);
  return result;
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

function populateDataVariable(){ //data getCookie
    let d = getCookie("dataSheet");
    //window.alert(d);
    if (d==""){
      window.alert("No data sheet selected!");
      window.location.replace("https://goosejacket.github.io/GooseSite/DressRehearsal/chooseSet.html");
    }
    else{
      return loadData();
    }  
}
