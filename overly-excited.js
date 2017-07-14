console.log("overly-excited.js");


let sentence = "The walrus danced through the trees in the light of the moon";
var newSentence = [];

function addExcitement(theWordArray) {

let splitSentence = sentence.split(" ");
	

	var newSentence = "";
	for (let counter = 0; counter < splitSentence.length; counter++){
		let word = splitSentence[counter];
	    newSentence = newSentence + " " + word;

	    if (counter > 0 && counter % 2 === 0) {
	    	
			console.log(newSentence + " !") ;
		} else {
			console.log(newSentence);
		}

	}
}

addExcitement(sentence);





