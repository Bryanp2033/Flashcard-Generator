var BasicCard = require("./library/basic.js");
var cardDate = require('./json/basic.json');
var inquirer = require('inquirer');

var count = 0
var correct = 0
var incorrect = 0


var startBasicQuiz = function(){

    if(count < cardDate.length){
        prompt();
    }else{
        endGame();
    }
}

startBasicQuiz();

function prompt(){
    console.log("\nNEW QUESTION");
    console.log("------------")
    inquirer.prompt([
        {
            name: "answer",
            message: cardDate[count].front
        }
    ]).then(function(result){

        answer = result.answer.toLowerCase()

        if(answer === cardDate[count].back){
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
    })
}

function endGame(){
    console.log("_________\n" + "\nYour Results")
    console.log("Answers Correct: " + correct);
    console.log("Answers Incorrect: " + incorrect + "\n")
}

