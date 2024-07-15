function print(content, id){
  document.getElementById(id).textContent = content.toString();
}

var num; var coeffirst; var box; var coeff;

function run(){
  //get info
  num = parseInt(document.getElementById("num").value) + 1; //num = number of items in og question
  coeffirst = document.getElementById("coeffirst").value; //1 1 1
  coeff = coeffirst.split(" "); //"1", "1", "1"
  for(var i = 0; i < coeff.length; i++){
    coeff[i] = parseInt(coeff[i]); //1, 1, 1
  }
  box = parseInt(document.getElementById("box").value) * -1;
  var thing = 0; var add; var line = ""; var space = "";
  var row1 = [box.toString(), "| ", ...coeff];
  
  //make a little box for the box
  for(var i = 0; i < box.toString().length; i++){line += "-";space += " ";}
  var row2 = [line, "  "];
  var row3 = [space, "  "];

  /* Multiply the latest number by box, then add to the newest coeff to come up with a new number.
  -1A |  1X  2Y   1Z      0 * A = 0, 0 + X = D
  ----    v  -1B  -1C     D * A = B, B + Y = E
          1D  1E   0F     E * A = C, C + Z = F
  */
  
  for(var i = 0; i < num; i++){
    add = thing * parseInt(box); //add(0, B, C) = thing(D, E, F) * A
    row2.push(add.toString());   //make the v B C row
    x = coeff[i];                //x(X, Y, Z) get from coeffs
    thing = parseInt(x) + add;   //thing(D, E, F) = x(X, Y, Z) + add(0, B, C)
    row3.push(thing.toString()); //make the D E F row
  }

  //print sympathetic division equation
  print(row1.join(" "), "eq1"); //[box, " | ", num * items]
  print(row2.join(" "), "eq2"); //["---", "  ", num * items
  print("   " + row3.join(" "), "eq3"); //["  ", num * items]

  //print actual equation
  //(x^2 + 2x + 1) / (x+1) = ??? row3 = 1 1 0
  var question = "";
  var answer = "";
  h = num; //h = exponent
  for(var i = 2; i < 1+num; i--){
    answer += row3[i].toString() + "x^" + (h-1).toString() + " + "; //
    question += coeff[i-2].toString() + "x^" + (h+0).toString() + " + ";
    h -= 1;
  }
  question += coeff[num].toString();
  answer += row3[num].toString() + " + ";
  answer += "(" + row3[num+2].toString() + ")/(x + " + (box*-1).toString() + ")";
  print("(" + question + ") / (x + " + (box*-1).toString() + ") =", "q");
  print(answer, "ans")
  }
/*  question = ""
  answer = ""
  h = num - 1; //there will be h instances of x, plus one constant
  for(var i = 1; i < num+1; i++){//makes sure to skip the formatting first one
    cof = row3[i].toString();
    qCof = coeff[i-1].toString();
    exp = (h-1).toString();
    qExp = h.toString();
    answer += checkingUp(cof, exp);
    anser += " + "
    question += checkingUp(qCof, qExp);
    question += " + "
    h -= 1;*/

//stupid actual equation is hard to code
function checkingUp(cof, exp){
  var ret = "";
  if(cof != "0"){
    if(cof == 1){
      ret += ""
    }else{
      ret += cof
    }if(exp != "0"){
      if(exp == 1){
        ret += "x"
      }else{
        ret += "x^" + exp;
      }
    }else{
      ret += ""
    }
  }else{
    ret += ""
  }
  return ret;
}
