//<canvas id="my-house" width="300" height="300"></canvas>
//function to turn on/off first derivative: deriSwap()


const canvas = document.getElementById("my-house");
const ctx = canvas.getContext("2d");

var a = Array(300);
a.fill(0);

var y = 0;

var deri = false;

function deriSwap(){
  deri = !deri;
}

addEventListener("mousemove", (e) => {
  y = e.clientY;
});

setInterval(function(){
  a.shift();
  a.push(y);
}, 10);

function drawPos(){
  ctx.lineWidth = 1;
  ctx.strokeStyle = "red";

  ctx.moveTo(0, 150);
  for(let i = 0; i < a.length; i++){
    ctx.lineTo(i, a[i]);
  }
  ctx.stroke();
}

function drawDOne(){
  ctx.lineWidth = 1;

  let change = 0;
  ctx.moveTo(0, 150);
  for(let i = 1; i < a.length; i++){
    change = (a[i]-a[i-1])+150;
    //if(change > 150){ctx.strokeStyle = "green";}
    //else if(change = 150){ctx.strokeStyle = "black";}
    //else{ctx.strokeStyle = "red";}
    ctx.lineTo(i, change);
  }
  ctx.stroke();
}

setInterval(function(){
  ctx.reset();
  drawPos();
  if(deri){drawDOne();}
}, 100);
