//init setup
let started = false;
let list; let achievement; let year; let man; let ansYear; let ansMan;

//data (until line 66)
const Men = [
  ["Paul Broca", "1861", "studied syphilis speech inpediment man (Patient Tan) and mapped ____'s Area"],
  ["Donald Hebb", "1949", "nerves that fire together, wire together"],
  ["David Huber and Torsten Wiesel", "1960", "Ocular dominance"],
  ["Santiago Ramon y Cajal", "1894", "neurons make new Connections"],
  ["Eric Kandel", "1960", "Pavlov's sea slugs (Aplysia California)"],
  ["H.M.", "1950s", "severe epilepsy, removed hippocampus, no new memories"],
  ["Barack Obama", "2013", "Brain Research through Advancing Innovative Neurotechnologies"],
  ["German men", "2000s", "green algae responds to light"],
  ["Franz Joseph Gall", "1800s", "phrenology (brain bumps)"],
  ["Hans Berger", "1920s", "electroencephalogram/EEG"],
  ["a deep neural network", "2015", "won at Go"],
  ["Abu al-Qasim al-Zahrawi", "Middle Ages", "father of Modern surgery"]
];

//easy python version of math.random
function random(max) {return Math.floor(max * Math.random());}

function randomChoice(which){
  let items = getItems(which);
  let rand = random(items.length);
  return items[rand];
}

//generates a prompt by randomly pulling a sentence starter, adjective, article, and noun
function generatePrompt(){
  if(started){
    achievement = ""; year = ""; man = ""; list = Men;

    //decide man
    let randomBook = list[random(list.length)];
    achievement = randomBook[2]; year = randomBook[1]; man = randomBook[0];
  }
}

//responds to user input
function runRound(){
  let resultText = "";
  if (ansYear == year){
    resultText = "Good job with the year, " + year + "! ";
    ansYear == "";
  }else{
    resultText = "The year was " + year + ". ";
    ansYear == "";
  }
  if(ansMan == man){
    resultText += "Good job on the man! It was " + man;
    ansMan = "";
  }else{
    resultText += "It was actually " + man;
    ansMan = "";
  }
  window.alert(resultText);
}
window.onload = function() {
  generatePrompt();
}

$(document).ready(function(){
  $("#sub").click(function(){
    if(started){
      ansYear = document.getElementById('inp').value
      ansMan = $('input[type="radio"][name="author"]:checked').val();
      runRound();
      
    } else started = true;
    generatePrompt();
    $("#title").text(achievement);
    $("#inp").val("");
    $("#sub").val("Submit");
    for(let i = 0; i < 9; i++){
      document.getElementById("author"+i.toString()).checked = false;
    }
  });
});
