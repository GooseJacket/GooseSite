// Get the modal
var modal = document.getElementById("myModal");

function yeet(ele){
  modal.style.display = "block";
  modalImg.src = ele.src;
  captionText.innerHTML = ele.alt;
}

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 
