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
  current = current.substring(0, current.length - 5);
  var next;
  if(current == "W%2042") next = "SI1";
  if(current == "SI%2013") next = "W1";
  else if(current[0] == "W"){
    if(current[3] == "1") next = current.substring(0, current.length - 1) + "2";
    else{next = "W" + (current[4].parseInt() + 1).toString() + "1";}
  }
  else{ 
    next = "SI" + (current.substring(5).parseInt() + 1).toString();
  }
  yeet(document.getElementById(next));
}

function prevImg(){
  current = current.substring(0, current.length - 5);
  var next;
  if(current == "ST1") next = "W42";
  else if(current == "W1") next = "SI13";
  else if(current[0] == "W"){
    if(current[3] == "2") next = current.substring(0, current.length - 1) + "1";
    else{next = "W" + (current[4].parseInt() - 1).toString() + "2";}
  }
  else{ 
    next = "SI" + (current.substring(5).parseInt() - 1).toString();
  }  
  yeet(document.getElementById(next));
}
