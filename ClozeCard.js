var ClozeCard = require("./library/cloze.js");
var cardDate = require('./json/cloze.json');
var inquirer = require('inquirer');




var count = 0
var correct = 0
var incorrect = 0


var startClozeQuiz = function(){

    if(count < cardDate.length){
        prompt();
    }else{
        endGame();
    }
}

startClozeQuiz();

function prompt(){
    console.log("\nNEW QUESTION");
    console.log("------------")
    inquirer.prompt([
        {
            name: "answer",
            message: cardDate[count].partial
        }
    ]).then(function(result){

        answer = result.answer.toLowerCase()

        if(answer === cardDate[count].cloze){
            console.log("\nyou got it right!" + "\n" + cardDate[count].text)
            count ++;
            correct ++
            startClozeQuiz();
        } else {
            console.log("\nyou got it wrong!" + "\n" + cardDate[count].text)
            count ++
            incorrect ++
            startClozeQuiz();
        }
    })
}

function endGame(){
    console.log("_________\n" + "\nYour Results")
    console.log("Answers Correct: " + correct);
    console.log("Answers Incorrect: " + incorrect + "\n")
}

