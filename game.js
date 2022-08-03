//document.addEventListener("onload", nextSequence)
var gamePattern = [];
var randomSeq;
var btnClrs = ["red", "blue", "green", "yellow"];
var choosenColor = btnClrs[nextSequence()];
gamePattern.push(choosenColor);

function nextSequence() {

    randomSeq = Math.floor(Math.random() * 4);
    return randomSeq;
}

$("#" + choosenColor).addClass("pressed")
setTimeout(() => {
    $("#" + choosenColor).removeClass("pressed")
}, 100);

//sounds core

var sdb = new Audio("sounds/blue.mp3");
var sdg = new Audio("sounds/green.mp3");
var sdr = new Audio("sounds/red.mp3");
var sdy = new Audio("sounds/yellow.mp3");
var sdwrong = new Audio("sounds/wrong.mp3");
//get buttons clicked

$("button").on("click", function() {



});
console.log(sdy);