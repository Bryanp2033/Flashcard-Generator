var ClozeCard = require("./library/cloze.js");
var cardDate = require('./json/cloze.json');
var inquirer = require('inquirer');


var count = 0

// function startgame(){


   var askQuestion = function(){

        if(count < cardDate.length){
            console.log("NEW QUESTION");

            inquirer.prompt([
                {
                    name: "answer",
                    message: cardDate[count].partial
                }
            ]).then(function(result){

                if(result.answer === cardDate[count].cloze){
                    console.log("you got it right" + "\n" + cardDate[count].text)
                    count ++;
                    askQuestion();
                } else {
                    console.log("you got it wrong" + "\n" + cardDate[count].text)
                    count ++
                    askQuestion();
                }
            })
        }
   }
// }

// startgame();
askQuestion();













function endGame(){
    //if count reached limit?
}

function round(){
    var count = 0;
}

function prompts(){
    //inquirer?
}
