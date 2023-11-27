//init setup
let started = false;
let list; let title; let year; let author; let ansYear; let ansAuthor;

//data (until line 66)
const LeGuin = [
  ["Roeannon World", 1966],
  ["Planet of Exile", 1966],
  ["City Illusions", 1967],
  ["Wizard of Earthsea", 1968],
  ["Word: World Forest", 1968],
  ["Left Hand Dark", 1969],
  ["Lathe of Heaven", 1971],
  ["Dispossesed", 1975],
  ["Tombs Atuan", 1972],
  ["Farthest Shore", 1973],
  ["Always Coming Home", 1985],
  ["Steering Craft", 1989],
  ["Lavinia", 2008],
  ["Steering Craft 2", 2015],
  ["The Way, Power Way", 1997],
  ["Walk Omelas", 1973]
];
const Hawthorne = [
  ["Fanshawe", 1828],
  ["Twice Told Tales", 1837],
  ["Three Kids' Books", 1840],
  ["Rappacini's Daughter", 1844],
  ["Scarlet Letter", 1850],
  ["House with Seven Gables", 1851],
  ["Twice Told Tales Two", 1851],
  ["More kids' books", 1851],
  ["Franklin Pierce Campaign Bio", 1852],
  ["Marble Faun", 0000],
  ["Chiefly War-Matters", 0000]
];
const Bierce = [
  ["Nuggets and Dust in California", 1872],
  ["Fiend's Delights", 1873],
  ["Cobwebs, Empty Skulls", 1874],
  ["Black Beetles in Amber", 1892],
  ["Shapes of Clay", 1903],
  ["Collected Works 4", 1909],
  ["Collected Works 5", 1912],
  ["Moxon's Master", 1899],
  ["Devil's Dictionary", 1906],
  ["An Owl Creek Bridge", 0000]
];
const Bradbury = [
  ["Dark Carnival", 1947],
  ["Martian Chronicals", 1950],
  ["Illustrated Man", 1951],
  ["Fahrenheit 451", 1953],
  ["I Sing the Body Electric", 1969]
];
const Butler = [
  ["Patternmaster", 1976],
  ["Kindred", 1979],
  ["Survivor", 1978],
  ["Wild Seed", 0000],
  ["Clay's Ark", 1984],
  ["Adult Rites", 1988],
  ["Imago", 1989],
  ["Parable Sower", 1993],
  ["Parable Talents", 1998],
  ["Dawn", 1987],
  ["Lilith's Brood", 2000],
  ["Fledgling", 2005],
  ["Child Finder", 2014]
];
const Crowley = [
  ["Deep", 1975],
  ["Beasts", 1977],
  ["Little, Big", 1981],
  ["Aegypt", 1987],
  ["Antiquities", 1993],
  ["Love and Sleep", 1994],
  ["Daemon...", 2000],
  ["Snow", 1985],
  ["Translator", 2002],
  ["Novelties and Souveniers", 2004],
  ["Lord Byron Everland", 2005],
  ["Endless Things", 2007],
  ["In Other Words", 2007],
  ["Chemical Wedding", 2016],
  ["Ka: Dar Oakly Ymr", 2017],
  ["Flint Mirror", 2018]
];
const Moore = [["Shambleau", 0000], ["No Woman Born", 1944]];
const Gaiman = [
  ["Duran Duran biography", 0000],
  ["Douglas Adams", 0000],
  ["Violent Cases", 0000],
  ["Black Orchid", 0000],
  ["Sandman", 0000],
  ["Coraline", 2002],
  ["Graveyard Book", 2008],
  ["Ocean Lane", 2013],
  ["Good Omens", 1990],
  ["Neverwhere", 1995],
  ["Stardust", 1999],
  ["American Gods", 2001],
  ["Amansi Boys", 2005],
  ["Black Mirrors", 1998],
  ["Fragile Things", 2006],
  ["Mushroom Hunters", 2017]
];
const Howe = [
  ["A Chinese Encounter", 2009],
  ["Loop of Jade", 2015]
  ["Relativity", 2015]
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
    title = ""; year = ""; author = ""; list = [];

    //decide author
    let randomAuthor = random(9);
    if(randomAuthor == 0){ author = "Le Guin"; list = LeGuin;}
    else if(randomAuthor == 1){ author = "Hawthorne"; list = Hawthorne;}
    else if(randomAuthor == 2){ author = "Bierce"; list = Bierce;}
    else if(randomAuthor == 3){ author = "Bradbury"; list = Bradbury;}
    else if(randomAuthor == 4){ author = "Butler"; list = Butler;}
    else if(randomAuthor == 5){ author = "Crowley"; list = Crowley;}
    else if(randomAuthor == 6){ author = "Moore"; list = Moore;}
    else if(randomAuthor == 7){ author = "Gaiman"; list = Gaiman;}
    else if(randomAuthor == 8){ author = "Howe"; list = Howe;}

    //decide book
    let randomBook = list[random(list.length)];
    title = randomBook[0]; year = randomBook[1];
  }
}

//responds to user input
function runRound(){
  let resultText = "";
  if (ansYear == year.toString()){
    resultText = "Good job with the year, " + year.toString() + "! ";
    ansYear == "";
  }else{
    resultText = "The year was " + year.toString() + ". ";
    ansYear == "";
  }
  //window.alert(ansAuthor);
  if(ansAuthor == author){
    resultText += "Good job on the author! It was " + author;
    ansAuthor = "";
  }else{
    resultText += "It was actually " + author;
    ansAuthor = "";
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
      ansAuthor = $('input[type="radio"][name="author"]:checked').val();
      runRound();
      
    } else started = true;
    generatePrompt();
    $("#title").text(title);
    $("#inp").val("");
    $("#sub").val("Submit");
    for(let i = 0; i < 9; i++){
      document.getElementById("author"+i.toString()).checked = false;
    }
  });
});
