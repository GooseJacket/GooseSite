const canvas = document.getElementById("my-house");
const ctx = canvas.getContext("2d");

var a = Array(300);
a.fill(0);

var y = 0;
var x = 0;

var theta = 0;

var draw = true;
var auto = true;

function swap(){
  auto = !auto;
}

addEventListener("mousemove", (e) => {
  if(!auto){
    y = e.clientY;
    x = e.clientX;
  }
});

setInterval(function(){
  if(!auto){
    var dist = Math.sqrt(Math.pow(x-150, 2) + Math.pow(y-150, 2));
    if(dist < 115 && dist > 85){
      a.shift();
      a.push(y);
      draw = true;
    }else{draw = false;}
  }
  else{
    theta += .05;
    a.shift();
    a.push(100*Math.sin(theta)+150);
  }
}, 10);

function setUp(){
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";

  ctx.moveTo(0, 150);
  ctx.lineTo(300, 150);
  ctx.moveTo(150, 0);
  ctx.lineTo(150, 300);
  ctx.stroke();

  ctx.moveTo(225, 150);
  ctx.arc(150, 150, 100, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawTriangle(){
  ctx.lineWidth = 2;
  ctx.strokeStyle = "blue";

  ctx.moveTo(x, 150);
  ctx.lineTo(x, y);
  ctx.stroke();
}

function drawPos(){
  ctx.lineWidth = 1;
  ctx.strokeStyle = "red";

  ctx.moveTo(0, 150);
  for(let i = 0; i < a.length; i++){
    ctx.lineTo(i, a[i]);
  }
  ctx.stroke();
}

setInterval(function(){
  ctx.reset();
  setUp();
  if(draw){
    //drawTriangle();
    drawPos();
  }
}, 100);
