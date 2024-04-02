var quiz = []; var scores;

function onestwos(){
  //for each round, there's a 1/3 chance of the "odd man out" being any of the three kids.
  possibilities = 3 ** quiz.length;
  document.getElementById("poss").textContent = possibilities;
  //these scores are the three kids' scores
  scores = [[0],[0],[0]];
  //for each 
  for(var x = 0; x < quiz.length; x++){
    i = quiz[x];
    temp = [];
    for (var y = 0; y < scores[0].length; y++){
      j = scores[0][y];
      if(i == 2){temp.push(j);temp.push(j+1);temp.push(j+1)}
      if(i == 1){temp.push(j);temp.push(j);temp.push(j+1)}
    }
    scores[0] = temp;temp = [];
    for (var y = 0; y < scores[1].length; y++){
      j = scores[1][y];
      if(i == 2){temp.push(j+1);temp.push(j);temp.push(j+1);}
      if(i == 1){temp.push(j);temp.push(j+1);temp.push(j);}
    }
    scores[1] = temp;temp = [];
    for (var y = 0; y < scores[2].length; y++){
      j = scores[2][y];
      if(i == 2){temp.push(j+1);temp.push(j+1);temp.push(j);}
      if(i == 1){temp.push(j+1);temp.push(j);temp.push(j);}
    }
    scores[2] = temp
  }
}

function remove(list, item){
  before = []
  found = false
  after = []
  for(var j = 0; j < list.length; j++){
    i = list[j]
    if(i == item && !found){found = true}
    else{
      if(found){after.push(i)}
      else{before.push(i)}
    }
  }
  return before.concat(after);
}

function threeszeros(){
  set = 0
  var i = 0;
  while (i < quiz.length){
    if(quiz[i] == 3){
      set += 2
      quiz = remove(quiz,quiz[i])
    }
    else if(quiz[i] == 0){
      quiz = remove(quiz,quiz[i])
    }
    else i += 1
  }
  return set;
}

function getInput(){
  valid = ["0","1","2","3"];
  quiz = document.getElementById("userInput").value.split(",");
  i = 0;
  while (i < quiz.length){
    if (!(quiz[i] in valid)){ 
      quiz = remove(quiz,quiz[i]);
    }
    else{
      quiz[i] = parseFloat(quiz[i]);
      i+=1;
    }
  }
  return quiz
}

function sum(list){
  ret = 0;
  for(var i = 0; i < list.length; i++){
    ret += list[i]
  }
  return ret
}

function getmed(list){
  list.sort();
  if(list.length % 2 == 0){
    return (list[list.length/2] + list[list.length/2 - 1])/2
  }
  else{ //0,1,*2*,3,4,5
    return list[(list.length-1)/2]
  }
}

function getmax(l){list = l;list.sort();return list[list.length-1];}
function min(list){list.sort();return list[0];}

function getmode(list){
  nums = []
  freqs = []
  for(var i = 0; i < list.length; i++){
    if(!(list[i] in nums)){nums.push(list[i]);freqs.push(1)}
    else{
      temp = freqs[nums.indexOf(list[i])];
      freqs[nums.indexOf(list[i])] = temp + 1;
    }
  }
  return nums[freqs.indexOf(getmax(freqs))];
  
}

function print(id, content){
  document.getElementById(id).textContent = content.toString();
}

function clearAll(){
  print("max", "--");
  print("min", "--");
  print("med", "--");
  print("mode", "--");
  print("poss", "--");
  print("heard", "___");
  print("set", "--");
}

//START HERE
function run(){
  clearAll();
  //take in the input ex. 0,1,2,3,4 --> 0,1,2,3
  quiz = getInput();
  print("heard", quiz);

  //for each 3, add 2 points. for each 0, add 0 points.
  //remove the 3's and 2's. ex. 0,1,2,3 --> 1,2
  set = threeszeros();
  print("set", set);

  var goOn = true; results = []
  //if we just have one score left there's only 1 possible distribution so we just stick that in and call it a day
  if(quiz.length <2){
    goOn=false 
    print("poss", 1);
    if(quiz.length == 1){
      results = [set + quiz[0]];
    }else results = [set];
  }
  //otherwise we go to the stats part
  else onestwos();

  if(goOn==true){
    for(var i = 0; i < scores[0].length; i++){
      trio = [scores[0][i], scores[1][i], scores[2][i]]
      trio = remove(trio,min(trio))
      calculated = sum(trio)
      results.push(set+calculated)
    }
  }
  best = getmax(results);
  print("max", best);
  worst = min(results);
  print("min", worst);
  av = sum(results)/results.length;
  print("mean", av);
  mode = getmode(results);
  print("mode", mode);
  med = getmed(results);
  print("med", med);
  graph(results, best, worst)
}

function graph(data, xmax, xmin){
  xrange = xmax - xmin //3 - 0 = 3
  if(xrange < 10){
    xmin = xmin - (10-xrange)/2
    xrange = 10
  }
  xstep = xrange / 10 //10 / 10 = 1

  xranges=[]; xcounts=[];
  for(var i = 0; i < 10; i++){
    temp = [xstep*i + xmin, xstep*(i+1) + xmin]
    xranges.push(temp);
    xcounts.push(0);
  }

  for(var l = 0; l < data.length; l++){
  i = data[l];
    for(var j = 0; j < xranges.length; j++){
      if(i >= xranges[j][0] && i < xranges[j][1]){
        xcounts[j] = xcounts[j] + 1
        break
      }
    }
  }
  superman = [...xcounts];
  xmode = getmax(superman)
  ymax = 200;
  
  for(var i = 0; i < 10; i++){
    letter = i.toString();
    print(letter, xranges[i]);
    wide = 50 + ymax*xcounts[i]/xmode;
    //print(letter, wide)
    document.getElementById("b"+letter).style.width = wide.toString()+"px";

  }
  
  //print("1 X =", ystep)
}
