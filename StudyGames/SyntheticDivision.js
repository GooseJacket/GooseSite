function print(content, id){
  document.getElementById(id).textContent = content.toString();
}

var num; var coeffirst; var box; var coeff

function run(){
  num = parseInt(document.getElementById("num").value) + 1;
  coeffirst = document.getElementById("coeffirst").value;
  coeff = coeffirst.split(" ");
  for(var i = 0; i < coeff.length; i++){
    coeff[i] = parseInt(coeff[i]);
  }
  box = parseInt(document.getElementById("box").value) * -1;
  var thing = 0; var add = 0; var row1 = [box.toString(), "| ", ...coeff];
  var line = ""; var space = "";
  for(var i = 0; i < box.toString().length; i++){
    line += "-";
    space += " ";
  }
  var row2 = [line, "  "];
  var row3 = [space, "  "];
  for(var i = 0; i < num; i++){
    add = thing * parseInt(box);
    row2.push(add.toString());
    x = coeff[i];
    //print(x)
    thing = parseInt(x) + add;
    row3.push(thing.toString());
  }

  //print sympathetic division equation
  print(row1.join(" "), "eq1");
  print(row2.join(" "), "eq2");
  print("   " + row3.join(" "), "eq3");

  //print actual equation
  var question = "";
  var answer = "";
  h = num - 1;
  for(var i = 1; i < num; i++){
    answer += row3[i].toString() + "x^" + (h-1).toString() + " + ";
    question += coeff[i-1].toString() + "x^" + (h).toString() + " + ";
    h -= 1;
  }
  question += coeff[num - 1].toString();
  answer += row3[num - 1].toString() + " + ";
  answer += "(" + row3[num].toString() + ")/(x + " + (box*-1).toString() + ")";
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
