//init setup
let round = 0; let wins = 0; let started = false;
let prompt; let ans; let hint; let adCase; let gender; let type; let should;

//data (until line 69)
const adjectives = [
  "bunt", "beliebt", "echt", "schoen", "toll", "blau", "besser", "gut",
  "deutlich", "international"
];
const nouns = [
["Katze", "Frau", "Tante", "Freundin", "Familie", "Offenkeit"],
["Herr", "Hund", "Junge", "Freund", "Arbeiter"],
["Maedchen", "Handy", "Heim", "Kind", "Haus"],
["Herren", "Eltern", "Augen", "Geschwister", "Freunde"]
]

const femEnds = [
    ["e", "e", "en", "en"],  //der
    ["e", "e", "en", "en"],  //ein
    ["e", "e", "er", "er"]  //unp
];
const mascEnds = [
    ["e", "en", "en", "en"],  //der
    ["er", "en", "en", "en"],  //ein
    ["er", "en", "em", "en"]  //unp
];
const neutEnds = [
    ["e", "e", "en", "en"],  //der
    ["es", "es", "en", "en"],  //ein
    ["es", "es", "em", "en"]  //unp
];
const plEnds = [
    ["en", "en", "en", "en"],  //der
    ["en", "en", "en", "en"],  //ein
    ["e", "e", "en", "er"]  //unp
];

const derW = [
    ["die", "die", "der", "der"],  //fem
    ["der", "den", "dem", "des"],  //masc
    ["das", "das", "dem", "des"],  //neut
    ["die", "die", "den", "der"]  //pl
];
const einW = [
    ["eine", "eine", "einer", "einer"],  //fem
    ["ein", "einen", "einem", "eines"],  //masc
    ["ein", "ein", "einem", "eines"],  //neut
    ["keine", "keine", "keinen", "keiner"]  //pl
];
const unpW = [
    [  //fem,masc,neut
        ["Toll ist", "Wo ist", "Welche Farbe ist"],
        ["Gern habe ich", "Ich kenne", "Es gibt"],
        ["Das Essen gefaellt", "Es ist kalt bei", "Die Karte von"],
        ["Waehrend", "Trotz", "Die Mutter"]
    ],
    [  //pl
        ["Toll sind", "Wo sind", "Welche Farbe ist"],
        ["Gern habe ich", "Ich kenne", "Es gibt"],
        ["Das Essen gefaellt", "Es ist kalt bei", "Die Karte von"],
        ["Waehrend", "Trotz", "Die Tante"]
    ]
];

//easy python version of math.random
function random(max) {return Math.floor(max * Math.random());}

//generates an items list for weightedChoice from the corresponding checkboxes
function getItems(which){
  let ids = [];
  if(which == "adCase") ids = [document.getElementById('nom').checked, document.getElementById('acc').checked, document.getElementById('dat').checked, document.getElementById('gen').checked];
  else if(which == "gender") ids = [document.getElementById('fem').checked, document.getElementById('masc').checked, document.getElementById('neut').checked, document.getElementById('pl').checked]; 
  else if(which == "type") ids = [document.getElementById('der').checked, document.getElementById('ein').checked, document.getElementById('unp').checked];
  else return [0, 1, 2];
  let ret = []; 
  for (var i = 0; i < ids.length; i++){
    if(ids[i] == true){ret.push(i);}
  }
  if(ret.length == 0){
    if(which == "type") ret = [0, 1, 2]
    else ret = [0, 1, 2, 3]
  }
  return ret;
}

function randomChoice(which){
  let items = getItems(which);
  let rand = random(items.length);
  return items[rand];
}

//generates a prompt by randomly pulling a sentence starter, adjective, article, and noun
function generatePrompt(){
  prompt = ""; ans = ""; hint = ["", "", ""]; should = "";
  adCase = randomChoice("adCase");  //0=nom 1=acc 2=dat 3=gen
  gender = randomChoice("gender");  //0=fem 1=masc 2=neut 3=pl
  type = randomChoice("type");      //0=der 1=ein 3=unp
  //window.alert(["gender", gender, "adCase", adCase, "type", type]); //debug

  if (gender < 3){
    prompt += unpW[0][adCase][random(unpW[0][adCase].length - 1)] + " ";
  }else{prompt += unpW[1][adCase][random(unpW[1][adCase].length - 1)] + " ";}

  if (type == 0){
    hint[0] = "der";
    prompt += derW[gender][adCase] + " ";
  }else if (type == 1){
    hint[0] = "ein";
    prompt += einW[gender][adCase] + " ";
  }else hint[0] = "unp"

  prompt += adjectives[random(adjectives.length - 1)] + "__ ";

  prompt += nouns[gender][random(nouns.length - 1)];
  if (gender == 0){
    hint[1] = "fem";
    should = femEnds[type][adCase];}
  else if (gender == 1){
    hint[1] = "masc";
    should = mascEnds[type][adCase];}
  else if (gender == 2){
    hint[1] = "neut";
    should = neutEnds[type][adCase];}
  else if (gender == 3){
    hint[1] = "pl";
    should = plEnds[type][adCase];}

  if (adCase == 0) hint[2] = "nom";
  else if (adCase == 1) hint[2] = "acc";
  else if (adCase == 2) hint[2] = "dat";
  else if (adCase == 3) hint[2] = "gen";
}

function runRound(){
  if (ans == "hint"){
    window.alert(hint);
  }

  if (ans == should){
    window.alert("good job!");
    wins += 1;
    ans == "";
  }if (ans != should){
    window.alert("The answer was: " + should.toString() + " because " + hint.toString());
  }
}
window.onload = function() {
  generatePrompt();
}

$(document).ready(function(){
  $("#sub").click(function(){
    if(started){
      ans = document.getElementById('inp').value
      round += 1;
      runRound();
    } else started = true;
    generatePrompt();
    $("#Round").text(round);
    $("#wins").text(wins);
    $("#prompt").text(prompt);
    $("#inp").val("");
    $("#sub").val("Submit");
    ans = "";
  });
});
