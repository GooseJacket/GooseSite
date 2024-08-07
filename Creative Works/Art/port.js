function yeet(ele){
  document.getElementById("myModal").style.display = "block";
  document.getElementById("img01").src = ele.src;
  document.getElementById("caption").innerHTML = ele.alt;
}

// Get the <span> element that closes the modal
function closeModal(){
  document.getElementById("myModal").style.display = "none";
} 

function nextImg(){
  var current = document.getElementById("img01").src.split("/")[1];
  current = current.substring(0, current.length - 5);
  var next;
  if(current == "W 42") next = "SI 1";
  if(current == "SI 13") next = "W 1";
  else if(current[0] == "W"){
    if(current[3] == "1") next = current.substring(0, current.length - 1) + "2";
    else{next = "W " + (current[2].parseInt() + 1).toString() + "1";}
  }
  else{ 
    next = "SI " + (current.substring(2).parseInt() + 1).toString();
  }
  yeet("AP Portfolio Photos/" + next + ".png");
}

function nextImg(){
  var current = document.getElementById("img01").src.split("/")[1];
  current = current.substring(0, current.length - 5);
  var next;
  if(current == "ST 1") next = "W 42";
  else if(current == "W 1") next = "SI 13";
  else if(current[0] == "W"){
    if(current[3] == "2") next = current.substring(0, current.length - 1) + "1";
    else{next = "W " + (current[2].parseInt() - 1).toString() + "2";}
  }
  else{ 
    next = "SI " + (current.substring(2).parseInt() - 1).toString();
  }
  yeet("AP Portfolio Photos/" + next + ".png");
}
