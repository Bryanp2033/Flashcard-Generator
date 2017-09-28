// the js file with the Basic Card Constructor
var BasicCard = require("./library/basic.js");
// the json file containing the data needed for the cloze quiz
var basicData = require('./json/basic.json');
var inquirer = require('inquirer');

// keeps count of the questions being asked
var count = 0;
// keeps count of user's correct answers
var correct = 0;
// keeps count of user's incorrect answers
var incorrect = 0;

// function that starts the whole process
var startBasicQuiz = function(){

    // if count(0) is less then the json data length from basic.json
    if(count < basicData.length){
        prompt();
    }else{
        endGame();
    }
};

startBasicQuiz();

// function that runs if count is less then the json data length from basic.json
function prompt(){
    console.log("\nNEW QUESTION");
    console.log("------------")
    inquirer.prompt([
        {
            name: "answer",
            message: basicData[count].front
        }
    ]).then(function(result){

        // turns the user's answers to lowercase
        answer = result.answer.toLowerCase()

        // if user's answers match the 'back' data of the current basicData[count].front
        if(answer === basicData[count].back){
            console.log("\nyou got it right!")
            count ++;
            correct ++
            startBasicQuiz();
        } else {
            console.log("\nyou got it wrong!")
            count ++
            incorrect ++
            startBasicQuiz();
        }
    });
};

// function that runs if it run out of questions to ask
function endGame(){
    console.log("_________\n" + "\nYour Results");
    console.log("Answers Correct: " + correct);
    console.log("Answers Incorrect: " + incorrect + "\n");
};

