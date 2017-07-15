//research if ther is such a thing thar removes duplicates from an array

var randCharArray = document.querySelectorAll('.randChar');
var charExists = false;
var wordArray = ["C","A","T","S"];
var orgAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//var tempArray = new Array();
var randIndex;
var randValue;
//var randIndexOf;
var newAlphabet;
var numArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

//Making a class for each square

var squareClass = {
    
}




var change = function(){
    var b = this;
    if (charExists) {
        this.className = "randChar charTrue";
    }
    else {
        this.className = "randChar charFalse";
    }
    
    setTimeout(function(b){
        b.className="randChar";
     }, 500, b);
} 



function getRandNumber() {
    console.log("Before " + numArray);
    //Get random number 
    randIndex = Math.floor(Math.random() * numArray.length);
    //Get value number from NumberArray
    randValue = numArray[randIndex];

    console.log("Index = " + randIndex);
    console.log("Value = " + randValue);
    //Remove value from NumberArray
    numArray.splice(randIndex, 1);
}

//Asignes word characters to squares
for (i = 0; i < wordArray.length; i++){
    getRandNumber();
    randCharArray[randValue].innerHTML = wordArray[i];
    //randCharArray[randValue].className = "randChar charTrue";
}

RemoveFromOrgAlphabet();

//Need to delete characters from Alphabet array that apear in wordArray
//before populating the remaining squares
function RemoveFromOrgAlphabet() {
    //resets to orgAlphabet so everytime it takes out from full Alphabet
    newAlphabet = orgAlphabet;
    //loops throgh every character from word and removes from Alphabet
    for (var i = 0; i < wordArray.length; i++){
        //if there is a double character in work it needs to remove only once from orgAlphabet(returns -1 if does not find the character)
        if (newAlphabet.indexOf(wordArray[i]) >= 0){
        newAlphabet.splice(newAlphabet.indexOf(wordArray[i]),1);
        }
    }
    //to see if it removed correct characters
    //console.log(newAlphabet);
}

//Asignes alphabet characters to squares
for(i = 0; i < (25 - wordArray.length); i++){
    getRandNumber();
    randCharArray[randValue].innerHTML = newAlphabet[i];
    //randCharArray[randValue].className = "randChar charFalse";
}

  for(var i = 0; i<randCharArray.length; i++){
      randCharArray[i].addEventListener('click', change, false);
  }  
  






//Notes that might be useful (delete when not needed)
/*
//removes duplicates from an array. 
tempArray = [ ...new Set(tempArray) ];
 
*/

