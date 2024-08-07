var current;

function yeet(ele){
  document.getElementById("myModal").style.display = "block";
  document.getElementById("img01").src = ele.src;
  current = ele.src.split("/AP%20Portfolio%20Photos/")[1];
  document.getElementById("caption").innerHTML = ele.alt;
}

// Get the <span> element that closes the modal
function closeModal(){
  document.getElementById("myModal").style.display = "none";
} 

function nextImg(){
  //var current = document.getElementById("img01").src.split("/")[1];
  window.alert(current);
  current = current.substring(0, current.length - 5);
  var next;
  if(current == "W%2042") next = "SI1";
  else if(current == "SI%2013") next = "W1";
  else if(current[0] == "W"){
    if(current[3] == "1") next = current[3] + "2";
    else{next = "W" + (Number.parseInt(current[4], 10) + 1).toString() + "1";}
  }
  else{ 
    next = "SI" + (Number.parseInt(current.substring(5), 10) + 1).toString();
  }
  yeet(document.getElementById(next));
}

function prevImg(){
  current = current.substring(0, current.length - 5);
  var next;
  if(current == "ST1") next = "W42";
  else if(current == "W1") next = "SI13";
  else if(current[0] == "W"){
    if(current[3] == "2") next = current[3] + "1";
    else{next = "W" + (Number.parseInt(current[4], 10) - 1).toString() + "2";}
  }
  else{ 
    next = "SI" + (Number.parseInt(current.substring(5), 10) - 1).toString();
  }  
  yeet(document.getElementById(next));
}
