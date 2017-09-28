// the js file with the Cloze Card Constructor
var ClozeCard = require("./library/cloze.js");
// the json file containing the data needed for the cloze quiz
var clozeData = require('./json/cloze.json');
var inquirer = require('inquirer');

// keeps count of the questions being asked
var count = 0
// keeps count of user's correct answers
var correct = 0
// keeps count of user's incorrect answers
var incorrect = 0

// function that starts the whole process
var startClozeQuiz = function(){

    // if count(0) is less then the json data length from cloze.json
    if(count < clozeData.length){
        prompt();
    }else{
        endGame();
    }
}

startClozeQuiz();

// function that runs if count is less then the json data length from cloze.json
function prompt(){
    console.log("\nNEW QUESTION");
    console.log("------------")
    inquirer.prompt([
        {
            name: "answer",
            message: clozeData[count].partial
        }
    ]).then(function(result){

        // turns the user's answers to lowercase
        answer = result.answer.toLowerCase();

        // if user's answers match the 'cloze' data of the current clozeData[count].partial
        if(answer === clozeData[count].cloze){
            console.log("\nyou got it right!" + "\n" + clozeData[count].text)
            count ++;
            correct ++
            startClozeQuiz();
        } else {
            console.log("\nyou got it wrong!" + "\n" + clozeData[count].text)
            count ++
            incorrect ++
            startClozeQuiz();
        }
    })
}

// function that runs if it run out of questions to ask
function endGame(){
    console.log("_________\n" + "\nYour Results")
    console.log("Answers Correct: " + correct);
    console.log("Answers Incorrect: " + incorrect + "\n")
}

