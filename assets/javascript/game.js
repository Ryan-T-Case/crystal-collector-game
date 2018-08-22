//Game cannot run until document is ready
$(document).ready(function () {
    //There are four emeralds (red, blue, yellow, green)
    //Each emerald has random hidden value btw 1-12
    var redEmerald = Math.floor(Math.random() * 12) + 1;
    console.log("Red: " + redEmerald);
    var blueEmerald = Math.floor(Math.random() * 12) + 1;
    console.log("Blue: " + blueEmerald);
    var yellowEmerald = Math.floor(Math.random() * 12) + 1;
    console.log("Yellow: " + yellowEmerald);
    var greenEmerald = Math.floor(Math.random() * 12) + 1;
    console.log("Green: " + greenEmerald);
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
    //The total score increases by hidden emerald value on click

    //Wins increase when the target score and total score match
    var winLogic = function () {
        if (scoreCounter === targetScore) {
            console.log("You Win!");
            wins++;
            console.log("Total Wins: " + wins);
        }
    }

    //Red Chaos Emerald Click Event
    $("#redEmeraldButton").click(function () {
        scoreCounter += redEmerald;
        console.log("New Total Score: " + scoreCounter);
        winLogic();
    });

    //Blue Chaos Emerald Click Event
    $("#blueEmeraldButton").click(function () {
        scoreCounter = blueEmerald + scoreCounter;
        console.log("New Total Score: " + scoreCounter);
        winLogic();
    });

    //Yellow Chaos Emerald Click Event
    $("#yellowEmeraldButton").click(function () {
        scoreCounter = yellowEmerald + scoreCounter;
        console.log("New Total Score: " + scoreCounter);
        winLogic();
    });

    //Green Chaos Emerald Click Event
    $("#greenEmeraldButton").click(function () {
        scoreCounter = greenEmerald + scoreCounter;
        console.log("New Total Score: " + scoreCounter);
        winLogic();
    });
    //Losses increase when total score goes over target score
    //A win or loss should trigger a reset
    //This reset will generate new random target score
    //It will also generate new random hidden values for each emerald.
});