// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. 
const Letter = require('./letter')

//This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
//   * An array of `new` Letter objects representing the letters of the underlying word
const Word = function (wordToGuess){
    this.word = wordToGuess;
    this.wordLength = wordToGuess.length;
    this.newLetterObjects = []
    this.showGuessesArray = []
    
    for (let i = 0; i < this.wordLength; i++) {
        var letter = new Letter(this.word[i]);
        this.newLetterObjects.push(letter);
    };

    this.createWordArray = function (){
        // make the array by looping through the word;
        for (i = 0; i < this.wordLength; i++) {
            showGuessesArray += this.newLetterObjects[i] + " ";
            }
            console.log(showGuessesArray + "\n")
    }
    
    this.storeUserGuess = function (userInput){
        for (i = 0; i < this.newLetterObjects.length; i++) {
            this.newLetterObjects[i].guess(input);
            
        }
    };
};

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.


//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

module.exports = Word;