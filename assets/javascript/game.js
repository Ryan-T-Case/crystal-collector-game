//Game cannot run until document is ready
$(document).ready(function () {
  
    //Global variables and objects

    //There are four emeralds as objects (red, blue, yellow, green)
    var redEmerald = {value: 0};
    console.log("Red: " + redEmerald.value);
    var blueEmerald = {value: 0};
    console.log("Blue: " + blueEmerald.value);
    var yellowEmerald = {value: 0};
    console.log("Yellow: " + yellowEmerald.value);
    var greenEmerald = {value: 0};
    console.log("Green: " + greenEmerald.value);

    //Random target score number is displayed at start of game
    //Target score number is between 19-120
    var targetScore = Math.floor(Math.random() * (120 - 19)) + 19;
    console.log("Target Score: " + targetScore);

    //There is a counter for player total score
    var scoreCounter = 0;
    console.log("Total Score: " + scoreCounter);

    //There is a counter for wins and losses
    var wins = 0;
    var losses = 0;
    console.log("Total Wins: " + wins);
    console.log("Total Losses: " + losses);

    //Functions

    //Assigns each emerald with a random hidden value btw 1-12
    var assignRandomValue = function (obj) {
        obj.value = Math.floor(Math.random() * 12) + 1;
    }
    assignRandomValue(redEmerald);
    console.log("Red Random: " + redEmerald.value);
    assignRandomValue(blueEmerald);
    console.log("Blue Random: " + blueEmerald.value);
    assignRandomValue(yellowEmerald);
    console.log("Yellow Random: " + yellowEmerald.value);
    assignRandomValue(greenEmerald);
    console.log("Green Random: " + greenEmerald.value);

    //Determines logic for wins and losses
    var gameLogic = function () {
        //Logic for Wins
        if (scoreCounter === targetScore) {
            console.log("You Win!");
            wins++;
            console.log("Total Wins: " + wins);
            //Reset Total Score to Zero
            scoreCounter = 0;
            console.log("Total Score Reset: " + scoreCounter);
            //Reset Target Score to new random value
            targetScore = Math.floor(Math.random() * (120 - 19)) + 19;
            console.log("New Target Score: " + targetScore);
            //Calls functions to reset random value of emeralds
            assignRandomValue(redEmerald);
            console.log("Red Random: " + redEmerald.value);
            assignRandomValue(blueEmerald);
            console.log("Blue Random: " + blueEmerald.value);
            assignRandomValue(yellowEmerald);
            console.log("Yellow Random: " + yellowEmerald.value);
            assignRandomValue(greenEmerald);
            console.log("Green Random: " + greenEmerald.value);
        }
        //Logic for Losses
        else if (scoreCounter > targetScore) {
            console.log("You Lose!");
            losses++;
            console.log("Total Losses: " + losses);
            //Reset Total Score to Zero
            scoreCounter = 0;
            console.log("Total Score Reset: " + scoreCounter);
            //Reset Target Score to new random value
            targetScore = Math.floor(Math.random() * (120 - 19)) + 19;
            console.log("New Target Score: " + targetScore);
            //Calls functions to reset random value of emeralds
            assignRandomValue(redEmerald);
            console.log("Red Random: " + redEmerald.value);
            assignRandomValue(blueEmerald);
            console.log("Blue Random: " + blueEmerald.value);
            assignRandomValue(yellowEmerald);
            console.log("Yellow Random: " + yellowEmerald.value);
            assignRandomValue(greenEmerald);
            console.log("Green Random: " + greenEmerald.value);
        }
    }

    //On Click Events

    //Each of these events increases total score by hidden value of emerald on click

    //Red Chaos Emerald Click Event
    $("#redEmeraldButton").click(function () {
        scoreCounter += redEmerald.value;
        console.log("New Total Score: " + scoreCounter);
        gameLogic();
    });

    //Blue Chaos Emerald Click Event
    $("#blueEmeraldButton").click(function () {
        scoreCounter += blueEmerald.value;
        console.log("New Total Score: " + scoreCounter);
        gameLogic();
    });

    //Yellow Chaos Emerald Click Event
    $("#yellowEmeraldButton").click(function () {
        scoreCounter += yellowEmerald.value;
        console.log("New Total Score: " + scoreCounter);
        gameLogic();
    });

    //Green Chaos Emerald Click Event
    $("#greenEmeraldButton").click(function () {
        scoreCounter += greenEmerald.value;
        console.log("New Total Score: " + scoreCounter);
        gameLogic();
    });
});