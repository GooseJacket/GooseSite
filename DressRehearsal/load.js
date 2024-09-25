function loadData(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  
  xmlhttp.open("GET", "cardSets/"+filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  
  result = result.split("\n");
  
  for(let i = 0; i < result.length; i++){
      result[i] = result[i].split("UND");
  }
  
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
	  window.alert(d);
	  if (d==""){
		window.alert("No data sheet selected!");
	  }
	  else if(dataSheets.includes(d)){
		return loadData(d);
	  }
	  else window.alert("Uh. Something. Uh. Something went wrong. Yell at Ang at laladgdg@gmail.com to fix it, tell her 'something with the cookies pulling data'");
	}  

