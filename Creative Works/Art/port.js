function yeet(ele){
  document.getElementById("myModal").style.display = "block";
  document.getElementById("img01").src = ele.src;
  document.getElementById("caption").innerHTML = ele.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  document.getElementById("myModal").style.display = "none";
} 
