//<canvas id="my-house" width="300" height="300"></canvas>
//function to turn auto/manual: swap()

const canvas = document.getElementById("my-house");
const ctx = canvas.getContext("2d");

//scratch clones
var a = Array(300);a.fill(0);

var y = 0;var x = 0;var theta = 0;

//draw = cursor on circle?
//auto = automatic or manual
var draw = true;var auto = true;

//function for the button
function swap(){auto = !auto;}

//mousemove --> get x, get y
addEventListener("mousemove", (e) => {
  if(!auto){
    y = e.clientY;
    x = e.clientX;
  }
});

//if manual and if cursor on circle, push data.
setInterval(function(){
  if(!auto){
    var dist = Math.sqrt(Math.pow(x-150, 2) + Math.pow(y-150, 2));
    if(dist < 115 && dist > 85){
      a.shift();
      a.push(y);
      draw = true;
    }
    else{draw = false;}
  }
}, 10);

//if auto, push data. Slower than manual.
setInterval(function(){
  if(auto){
    draw = true;
    theta += .05;
    a.shift();
    a.push(100*Math.sin(theta)+150);
  }
}, 25);

function setUp(){ //the circle and axes
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";

  //axes
  ctx.beginPath();
  ctx.moveTo(0, 150);
  ctx.lineTo(300, 150);
  ctx.moveTo(150, 0);
  ctx.lineTo(150, 300);
  ctx.stroke();

  //circle
  ctx.beginPath();
  ctx.moveTo(225, 150);
  ctx.arc(150, 150, 100, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawPos(){ //wave, etc.
  ctx.lineWidth = 1;
  ctx.strokeStyle = "red";

  ctx.beginPath();
  ctx.moveTo(0, a[0]); //the sine wave
  for(let i = 0; i < a.length; i++){
    ctx.lineTo(i, a[i]);
  }
  ctx.stroke();

  if(auto){ //the automatic indicator
    let autox = 100*Math.cos(theta)+150;
    let autoy = 100*Math.sin(theta)+150;
    ctx.beginPath();
    ctx.moveTo(autox+10, autoy);
    ctx.arc(autox, autoy, 10, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

//keep redrawing the stuff
setInterval(function(){
  ctx.reset();
  setUp();
  if(draw){
    drawPos();
  }
}, 100);
