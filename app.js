var inquirer = require('inquirer');

// function thats start when user enters node app.js
var startGame = function(){

    inquirer.prompt([
        {
            name: "reply",
            message: "Which quiz would you like to do, basic or cloze?"
        }
    ]).then(function(result){

        // getting the user's input from inquirer and make it lowercase
        reply = result.reply.toLowerCase();

        // if user replies the inquirer message with "basic"
        if(reply === "basic"){
            var Basic = require("./basicCard.js");
        } 
        // if user replies the inquirer message with "cloze"
        else if(reply == "cloze") {
            var Cloze = require("./clozeCard.js");
        }
        // if user replies the inquirer message with something else
        else{
            console.log("you entered something else, please enter basic or cloze to start: ");
            startGame();
        }
    })
}
    
startGame();