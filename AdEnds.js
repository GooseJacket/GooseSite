var round = 1;

const adjectives = [
  "bunt", "beliebt", "echt", "schoen", "toll", "blau", "besser", "gut",
  "deutlich", "international"
];
const fem = ["Katze", "Frau", "Tante", "Freundin", "Familie", "Offenkeit"];
const masc = ["Herr", "Hund", "Junge", "Freund", "Arbeiter"];
const neut = ["Maedchen", "Handy", "Heim", "Kind", "Haus"];
const pl = ["Herren", "Eltern", "Augen", "Geschwister", "Freunde"];

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

let stats = [
    [0, 1, 2, 3],  //gender - f m n p 
    [0, 1, 2, 3],  //adCase - n a d g
    [0, 1, 2]
];  //type - d e unp
let wins = 0;

function random(max) {
  return max * Math.floor(Math.random());
}

function way(l){
  let values = []
  let ret = []
  l.forEach(i => {
    if (!values.includes(i)) {
        values.push(i);
        ret.push(1);
    }else ret[values.index(i)] += 1;
  })
  let div = ret.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    },0);
  ret = ret.map(i => i / div);
  return ret;
};

function weightedChoice(n, l) {
  let items = [0, 1, 2];
  if(n == 3) items.push(3);
  let weights = way(l);
  
    for (var i = 1; i < weights.length; i++)
        weights[i] += weights[i - 1];

    var random = Math.random() * weights[weights.length - 1];

    for (i = 0; i < weights.length; i++)
        if (weights[i] > random)
            break;

    return items[i];
}

document.getElementById("Round").innerHTML = round;

let prompt; let ans; let hint; let adCase; let gender; let type; let should;

function generatePrompt(){
  prompt = ""; ans = ""; hint = ["", "", ""]; should = "";
  adCase = weightedChoice(3, stats[1]);  //0=nom 1=acc 2=dat 3=gen
  gender = weightedChoice(3, stats[0]);  //0=fem 1=masc 2=neut 3=pl
  type = weightedChoice(2, stats[2]);  //0=der 1=ein 3=unp
  
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
  
  if (gender == 0) prompt += fem[random(fem.length - 1)];
  else if (gender == 1) prompt += masc[random(masc.length - 1)];
  else if (gender == 2) prompt += neut[random(neut.length - 1)];
  else if (gender == 3) prompt += pl[random(pl.length - 1)];
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

  document.getElementById("prompt").innerHTML = prompt;
  if (adCase == 0){ hint[2] = "nom";}
  else if (adCase == 1) hint[2] = "acc";
  else if (adCase == 2) hint[2] = "dat";
  else if (adCase == 3) hint[2] = "gen";
}

function runRound(){
  if (ans == "hint"){
    window.alert(hint);
  }

  let affect = 0;
  if (ans == should){
    window.alert("good job!");
    wins += 1;
    ans == "";
    stats[0].pop(gender);
    stats[1].pop(adCase);
    stats[2].pop(type);

    if (!stats[0].includes(gender)) stats[0].push(gender);
    if (!stats[1].includes(adCase)) stats[1].push(adCase);
    if (!stats[2].includes(type)) stats[2].push(type);

  }if (ans != should){
    window.alert("The answer was: " + should.toString() + " because " + hint.toString());

    stats[0].push(gender);
    stats[1].push(adCase);
    stats[2].push(type);
  }

  document.getElementById("wins").innerHTML = wins;
  generatePrompt();
}

function confirmInput() {
  ans = document.forms[0].inp.value;
  round += 1;
  runRound();
}

window.onload = function() {
  generatePrompt();
} 
