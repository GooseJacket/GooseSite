var writtenLetters = 	["a","d","e","f","h","i","k","l","m","n","o","r","s","v","t","u","x","z","’","\'"];
var phonemes = 		["æ","d","ɛ","f","h","i","k","l","m","ɲ","ɑ","r","s","v","t","ɯ","x","z","ʔ", "ʔ"];
//exceptions = ["e", "i", "a", "m", "n"];
var exAtStart = ["e"]; var startRep = ["i"];
var exAtEnd = ["m", "o"]; var endRep = ["ɱ", "ɔ"];
var exBefore = ["n", "o"];	var before = ["k", "l"]; var beforeRep = ["n", "ɔ"];
var exAfter = ["i"];	var after = ["r"]; var afterRep = ["ʏ"];

var words = [];
var allos = "";

function getAlphabet(){
	word = document.getElementById("word").value;
  for(var i = 0; i < word.length; i++){
  	var a = word[i];
  	if(!(writtenLetters.includes(a))){
    	writtenLetters.push(a);
    }
  }
  window.alert(writtenLetters);
}

function getIPA(word){
  word = word.replaceAll("/", " ");
  if(word === ""){return;}
  if(word.includes(" ")){
  	words = word.split(" ");
    //window.alert(words);
    for(var j = 0; j < words.length; j++){
    	getIPA(words[j]);
    }
    return;
  }
  allos = "";
  word = word.replaceAll("sh", "ç");
  var currentIPA = "";
  var exc = "";
  for(var i = 0; i < word.length; i++){
  	var letter = word[i];
  	if(writtenLetters.includes(letter)){ //IF VALID CHAR
    
    	letter = allophone(letter, word, i);
}	
    currentIPA += letter;
  }
  document.getElementById("IPA").innerHTML += "<tr> <td>" + word + "</td><td>" + currentIPA + "</td><td>" + allos + "</td></tr>";
}

function allophone(letter, word, i){
	var phon = phonemes[writtenLetters.indexOf(letter)]; 
	var allo = letter; 
	//AT START OF WORD
  if(exAtStart.includes(letter) && (i == 0 || word[i - 1] == " ")){ 
    allo = startRep[exAtStart.indexOf(letter)];
    getPhonRuleScript(phon, allo, "#___");
  }
  //AT END OF WORD
  else if(exAtEnd.includes(letter) && (i == word.length -1 || word[i + 1] == " ")){ 
    allo = endRep[exAtEnd.indexOf(letter)];
    getPhonRuleScript(phon, allo, "___#");
  }
  //BEFORE TRIGGER
  else if(exBefore.includes(letter) && (i != word.length -1) && (word[i + 1] == before[exBefore.indexOf(letter)])){ 
    allo = beforeRep[exBefore.indexOf(letter)];
    getPhonRuleScript(phon, allo, "___" + before[exBefore.indexOf(letter)]);
  }
  //AFTER TRIGGER
  else if(exAfter.includes(letter) && (i != 0) && (word[i - 1] == after[exAfter.indexOf(letter)])){ 
    allo = afterRep[exAfter.indexOf(letter)];
    getPhonRuleScript(phon, allo, after[exAfter.indexOf(letter)] + "___");
  }
  //NO ALLOPHONE
  else{allo = phon;}
  return allo;
}

function getPhonRuleScript(a, b, c){allos += "/"+a+"/ --> ["+b+"] / "+c + "<br>";}
