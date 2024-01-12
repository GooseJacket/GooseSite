//swapping //STEP FIVE - user does stuff
var you = "";
function allowDrop(ev) {ev.preventDefault();}
function drag(ev) {you = ev.target.id;}
function pushHtml(id, htmldata) {
  var theDiv = document.getElementById(id);
  theDiv.innerHTML = htmldata;
}
function drop(ev) { //do the swap
  //target = text recieving the input
  ev.preventDefault();
  var me = ev.target.id;
  var myText = document.getElementById(me).textContent;
  var yourText = document.getElementById(you).textContent;
  //set my value to yourText and your value to myText
  pushHtml(you, myText);
  pushHtml(me, yourText);
}
//end of swapping

//housekeeping
function random(max) {return Math.floor(max * Math.random());}

function sortByIndex(I, list){
  temp = []
  //add all the indexes to temp
  for(var i = 0; i < list.length; i++){
    temp.push(list[i][I]);
  }
  //sort by the index
  temp.sort();
  //for each index, find the index in the original list and replace the temp list with that.
  for(var i = 0; i < list.length; i++){ //0, 1, 2, 3, 4
    for(var j = 0; j < list.length; j++){ //find the OG
      if(list[j][I] == temp[i]){ //if the indexes match,
        temp[i] = list[j]; //replace the temp item with the OG
        break; //once done, get out of this loop
      }
    }
  }
  //window.alert(temp);
  return temp;
}
//end of housekeeping

//data
unusedYears = [
  [1790, "first US Census, happens every 10 years"],
  [1879, "James Ritty invents cash register, Patterson turns company into NCR"],
  [1880, "UC Census takes 7 years to process"],
  [1888, "Rob Porter asks Herman Hollerith for help: organette-style punch cards"],
  [1890, "US Census takes 2.5 years to process"],
  [1905, "NCR sold 100,000 cash registers per year"],
  [1901, "Thomas Watson fired from NCR, he turns to CTR"],
  [1904, "Thomas Watson now CTR president"],
  [1924, "CTR turns into IBM"],
  [1936, "Howard Aiken proposes Mark I"],
  [1941, "Howard Aiken enlists in navy"],
  [1944, "Mark I announced, Howard Aiken offends IBM. Whirlwind is proposed."],
  [1948, "WWII ended and Whirlwind almost stopped"],
  [1950, "IBM rejects majority share in EMCC"],
  [1951, "Whirlwind is operational"],
  [1952, "IBM releases 701 for scientists"],
  [1953, "IBM: 702 for businessmen and 650 for normies. John Backus proposed FORTRAN"],
  [1954, "IBM releases 704 and 705"],
  [1955, "IBM is better than UNIVAC"],
  [1956, "Thomas Watson makes his son CEO of IBM"],
  [1957, "FORTRAN released for 704's and SABRE starts developing"],
  [1958, "most 704's have FORTRAN"],
  [1959, "IBM releases 7090 and 7094"],
  [1960, "IBM releases 1401 and sold SABRE"],
  [1964, "IBM releases System/360; SABRE operational"],
  [1967, "IBM finishes 4 op systems"],
  [1970, "Most airlines have copied SABRE"],
  [1975, "Fred Brooks publishes Mythical Man-Month"],
  [1980, "SAGE decomissioned, William C Lowe proposes PC's"],
  [1981, "IMB PC published"],
  [1982, "Compaq reverse-engineers IBM PC"],
  [1985, "MS releases Windows 1.0"],
  [1987, "MS releases OS/2, IBM releases PS/2"],
  [1986, "Half of PC's sold are clones"],
  [1990, "Windows 3.0 released"],
  [1994, "New management at IBM, stopped OS/2"],
  [1860, "office correspondence stops being hand-written"],
  [1869, "Chris Lathan Sholes makes the first typewriter, funded by James Densmore"],
  [1873, "Philo Remington produced one thousand typewriters"],
  [1880, "Rand produces > 1k typewriters / year"],
  [1890, "Rand produces 20k typewriters / year"],
  [192, "Remington Typewriter Company merges with Rand Kardex Company --> Remington Rand"],
  [1949, "Hopper joins EMCC, working on UNIVAC"],
  [1950, "James Rand Jr bought EMCC"],
  [1952, "CBS election publicity stunt, Rand acquires English Reserch Association"],
  [1955, "Sperry Rand buys Remington Rand --> Sperry Rand"],
  [1957, "Former Sperry Rand employees found Control Data Corporation (science computers)"],
  [1964, "Original ENIAC patent finalized"],
  [1965, "Sperry Rand acquires RCA"],
  [1973, "Earl Larson strikes down ENIAC patent"],
  [1986, "Sperry Rand merges with Burroughs --> Unisys"],
  [1819, "Charles Babbage wants to automate math caclulations"],
  [1790, "Gaspard de Prony used the method of differences to make log tables in France"],
  [1833, "Difference Engine proof of concept is working"],
  [1834, "Babbage asks for money to make Analytical Machine, is rejected"],
  [1843, "Ada Lovelace translates  French D.E. report, 4x the length and uses Bernoulli numbers."],
  [1830, "decade that Babbage fixes the Bankers Clearning House with his book, Economy-Machinery-Manufacturers"],
  [1860, "decade that railroad companies ran electric cables along tracks"],
  [1928, "David Hilbert proposes Entscheidungsproblem. Does every problem have an algorithmic solution?"],
  [1887, "Dorr E Felt invents Comptometer, William S Burroughs invents mechanical calculator: both adding machines"],
  [1928, "MIT professor Vannevar Bush starts making Differential Analyzer"],
  [1931, "Differential Analyzer finished"],
  [1942, "John Atanastoff and Clifford Berry abandon the AB Computer"],
  [1935, "Konrad Zuse graduated from Tech College of Berlin-Charlottenberg, builds computers in his parents' living room"],
  [1938, "Konrad Zuse finishes the ZI prototype, with arithmetic and memory capabilities"],
  [1942, "Helmut Schreyer proposed Zuse's ideas to the government, rejected."],
  [1942, "Goldstine drafted into US army"],
  [1942, "Mauchley proposed high-speed computer to UPenn"],
  [1943, "US has no firing tables, Dr. Henry Goldstine is hired. He, Mauchley, and Eckert propose the ENIAC."],
  [1944, "John von Neumann joins the EDVAC project"],
  [1945, "von Neumann writes the First Draft on EDVAC, EDVAC completed"],
  [1946, "UPenn and army present EDVAC. UPenn Moore School Lectures, Maurice Wilkes attends. Mauchley + Eckert resign."],
  [1955, "ENIAC decomissioned"],
  [1951, "von Neumann finishes IAS stored-program Computer"],
  [1948, "Manchester Baby runs first program, making it the first stored-program computer"],
  [1949, "EDSAC runs first program, first practical stored-program computer"],
  [1949, "EMCC tests BINAC before shipping, BINAC breaks."],
  [1951, "first UNIVAC completed, on-site"],
  [1951, "IBM focuses on electronic computers"]


];
console.log(unusedYears);
usedYears = [];

colors = [
  ["IBM", "red"],
  ["MS", "blue"],
  ["Windows", "blue"]
  ["UNIVAC", "purple"],
  ["ENIVAC", "teal"],
  ["EDVAC", "brown"],
  ["Manchester", "green"],
  ["Rand", "chocolate"],
  ["Remington", "chocolate"],
  ["Sperry", "chocolate"]
  ["EMCC", "DeepPink"],
  ["Babbage", "Gold"],
  ["FORTRAN", "silver"],
  ["SABRE", "YellowGreen"],
  ["COBOL", "Tomato"],
  ["Apple", "Turquoise"],
  ["Amazon", "Steelblue"]
]

function printUsedYears(){
  usedYears = sortByIndex(0, usedYears);
  var ret = "";
  for(var i = 0; i < usedYears.length; i++){
    var text = usedYears[i][1]
    for(var j = 0; j < colors.length; j++){
      var word = colors[j][0];
      if(text.search(word) > -1){
        text = text.split(word).join("<span style=\"color:" + colors[j][1] + "\">" + word + "</span>");
      }
    }
    ret += usedYears[i][0].toString() + ": " + text + "<br>";
  }
  pushHtml("known", ret);
}
//end of data

//main
var currentList = []
var currentListSorted = []
//STEP THREE - generate the stuff
function generatePrompt(){
  currentList = [];
  if(unusedYears.length == 0){
    window.alert("All years have been used! Please refresh page.");
    document.getElementById("next").setAttribute("hidden", "hidden");
    return;
  }
  while(unusedYears.length < 5){
    //window.alert("Not enough unused years, adding more!");
    unusedYears.push(usedYears[random(usedYears.length)]);
    usedYears.splice(usedYears.indexOf(usedYears[-1]), 1);
  }
  var x = [0, ""]; var id = 0;
  console.log(unusedYears);
  console.log(unusedYears.length);
  for(var i = 0; i < 5; i++){
    id = random(unusedYears.length)
    x = unusedYears[id];
    console.log(x);
    unusedYears.splice(id, 1);
    currentList.push(x);usedYears.push(x);
  }
  console.log(unusedYears);
  console.log(unusedYears.length + usedYears.length);
  currentList = sortByIndex(1, currentList);
  currentListSorted = sortByIndex(0, currentList);
}

//STEP SEVEN - user gets feedback on whether the stuff is actually right.
function runRound(){
  let resultText = "";
  var tempID = "";
  for(var i = 0; i < 5; i++){
    tempID = "ev" + i.toString();
    if(document.getElementById(tempID).textContent == currentListSorted[i][1]){
      document.getElementById(tempID).style.color = "green";
    }else{document.getElementById(tempID).style.color = "red";}
  }
  printUsedYears();
}
//GO TO STEP TWO
//end of main

//JQuery
var started = false;
$(document).ready(function(){ //STEP ONE - open page
  //STEP TWO - click button
  $("#next").click(function(){ 
    started = true;
    $("#sub").show();
    generatePrompt(); //<--step three
    //STEP FOUR - actually show the generated stuff
    for(let i = 0; i < 5; i++){
    document.getElementById("year"+i.toString()).style.color = "black";
      document.getElementById("ev"+i.toString()).style.color = "black";
      $("#year"+i.toString()).show();
      $("#ev"+i.toString()).show();
      $("#next").text("Next Set");
      $("#year"+i.toString()).text(currentListSorted[i][0]);
      $("#ev"+i.toString()).text(currentList[i][1]);
    }
  });
  //STEP SIX - user hits submit
  $("#sub").click(function(){if(started){runRound();}});
});
//end of JQuery
