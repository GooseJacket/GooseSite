function yeet(ele){
  document.getElementById("myModal").style.display = "block";
  document.getElementById("img01").src = ele.src;
  document.getElementById("caption").innerHTML = ele.alt;
}

// Get the <span> element that closes the modal
function closeModal(){
  document.getElementById("myModal").style.display = "none";
} 
