// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

const inquirer = require('inquirer');
const fs = require('fs');
const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const userGuess = [];
const wordArray = [];
var guessesLeft = 0;

console.reset = function () {
    return process.stdout.write('\033c');
  }

const playGame = function(){
    // clearing the screen to make game play easier
    console.reset()
    // choose word to use
    // setting up temp word to choose from till i get other functions working
    var word = "wisdom"
    var wordArray = word.split('')
    console.log(word)
    console.log("the word array is "+wordArray)
    console.log(typeof wordArray)

    // give user twice as many guesses as the word length
    guessesLeft = (word.length * 2)

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
            console.log(response.guessedLetter)
            console.log(guessesLeft)
        }
    );
    };

    playGame()