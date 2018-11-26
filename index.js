// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

// the first files are the required NPM modules and external constructors
const inquirer = require('inquirer');
const fs = require('fs');
const Word = require("./word")
const Letter = require('./letter')
const fullWord = []

// This is the letters array to check against
const lettersArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// I am using different trees as words to guess
const wordsToGuessArray = ['oak','juniper','maple','sequoia','magnolia','willow','dogwood','spruce','elm','cedar'];


// array for the letters that have been guessed by player
var lettersGuessedWrong = [];

// an array to store correctly guessed letters;
var correctLetterGuesses = [];

var chooseAnotherWord = true;

var wordCount = wordsToGuessArray.length;
var guessesLeft = 10;
var wordtoGuess = ""

// this function selects a random word from the list of trees.  It can change automously based on the number of trees in the array.
const selectRandomWord = function (){
  var indexValue = (Math.floor(Math.random() * wordCount))
  wordtoGuess = wordsToGuessArray[indexValue];
  return wordtoGuess;
}

var word = new Word (selectRandomWord());

// this function will clear the screen at the begining of game play
console.reset = function () {
    return process.stdout.write('\033c');
  }


const mainGamePlay = function(){
    // clearing the screen to make game play easier
    console.reset()
    // choose word to use
    if (chooseAnotherWord) {
    selectRandomWord();
      chooseAnotherWord = false;
      word = new Word(wordtoGuess);
    }


    word.newLetterObjects.forEach(completeCheck);

    // give user twice as many guesses as the word length
    guessesLeft = (wordtoGuess.length * 2)

    if (fullWord.includes(false)){ 

    // Create a "Prompt" to begin the word guess application
    inquirer
      .prompt([
        //  first prompt the user to guess a word
        {
        type: "input",
        message: "Please choose a letter",
        name: "guessedLetter"
        },
      ])
      .then(function(response) {

            if (response === 'exit'){
              process.exit();
            }
            else if (!lettersArray.includes(response.guessedLetter) || response.guessedLetter.length > 1){
              console.log("\n")
              consold.log("Wrong guess! Try another letter please!\n");
              mainGamePlay();
            } else {
              if(lettersGuessedWrong.includes(response.guessedLetter) || correctLetterGuesses.includes(response.guessedLetter) || response.guessedLetter === ""){
                console.log("\n")
                console.log('You already guessed this letter\n')
                mainGamePlay();
              }
              else {
                var wordCheckArray = [];

                word.storeUserGuess(response.guessedLetter);

                //confirm if the guess is right
                word.newLetterObjects.forEach(wordCheck);
                if (wordCheckArray.join('') === fullWord.join('')) {
                  console.log("\nWrong!!\n");

                  lettersGuessedWrong.push(response.guessedLetter);

                  guessesLeft--;
                } else {
                  console.log("\nCorrect!! Keep up the good work!\n")

                  correctLetterGuesses.push(response.guessedLetter);

                }
                word.createWordArray();
              

              console.log("Guesses remaing: " + lettersGuessedWrong.join(" ") + "\n");

              console.log("Letters Guessed: " + lettersGuessedWrong.join(" ") + "\n");

              if(guessesLeft > 0){
                mainGamePlay();
              } else {
                console.log("You're out of guesses. Game over!\n")

                restartGame();
              }

              function wordCheck(key) {
                wordCheckArray.push(key.guessedLetter)
              }
            }
          }
        })
  } else {
      console.log("Winner!!\n");

      restartGame();
  }
  
  function completeCheck(key){
      fullWord.push(key.guessedLetter);
  }
}

function restartGame(){
  console.log('restart game selected')
}

    mainGamePlay()
    