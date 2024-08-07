var current;

function text(){
  if(document.getElementById("myModal").style.display == "block"){
    const key = event.key;
    if (key == "Escape") closeModal();
    else if (key == "ArrowLeft") prevImg();
    else if (key == "ArrowRight") nextImg();
  }
}

function yeet(ele){
  document.getElementById("myModal").style.display = "block";
  newimg = document.getElementById("img01");
  newimg.src = ele.src;

  if(ele.naturalHeight > ele.naturalWidth){newimg.style.width = "auto"; newimg.style.height = "80%";}
  else{newimg.style.height = "auto"; newimg.style.width = "80%";}
    
  current = ele.src.split("/AP%20Portfolio%20Photos/")[1];
  document.getElementById("caption").innerHTML = ele.alt;
}

// Get the <span> element that closes the modal
function closeModal(){
  document.getElementById("myModal").style.display = "none";
} 

function nextImg(){
  //var current = document.getElementById("img01").src.split("/")[1];
  current = current.split(".pn")[0];
  //window.alert(current);
  var next;
  if(current == "W%2042") next = "SI1";
  else if(current == "SI%2015") next = "W11";
  else if(current[0] == "W"){
    if(current[5] == "1") next = "W" + current[4] + "2";
    else{next = "W" + (Number.parseInt(current[4], 10) + 1).toString() + "1";}
  }
  else{ 
    next = "SI" + (Number.parseInt(current.substring(5), 10) + 1).toString();
  }
  //window.alert(next);
  yeet(document.getElementById(next));
}

function prevImg(){
  current = current.split(".pn")[0];
  //window.alert(current);
  var next;
  if(current == "SI%201") next = "W42";
  else if(current == "W%2011") next = "SI15";
  else if(current[0] == "W"){
    if(current[5] == "2") next = "W" + current[4] + "1";
    else{next = "W" + (Number.parseInt(current[4], 10) - 1).toString() + "2";}
  }
  else{ 
    next = "SI" + (Number.parseInt(current.substring(5), 10) - 1).toString();
  }  
  //window.alert(next);
  yeet(document.getElementById(next));
}
