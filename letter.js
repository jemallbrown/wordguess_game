// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:




//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

// **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: <https://jsbin.com/facawetume/edit?js,console>)

const Letter = function (letterInput) {
    //   * A string value to store the underlying character for the letter
    this.letterCharacter = letterInput;
    //   * A boolean value that stores whether that letter has been guessed yet
    this.guessedYet = false;
    //   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.toString = function (){
        if (this.letterCharacter === " "){
            this.guesedYet = true;
            return " ";
        }
        else {
            if (this.guessedYet === false){
                return "_";
            }

            else {
                return this.letterCharacter
            }
            };
        };
        
    this.playerLetterGuessCheck = function(guessedLetter){
        if (guessedLetter === this.letterCharacter) {
                this.guesedYet = true;
        }
    };
};

module.exports = Letter;