//document.addEventListener("onload", nextSequence)

var randomSeq;
var btnClrs = ["red", "blue", "green", "yellow"];
var choosenColor = btnClrs[nextSequence()];

var gamePattern = [];
gamePattern.push(choosenColor);

var userClickedPattern = [];


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
var userChosenColour;
$(".btn").on("click", function() {

    userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);

    switch (userChosenColour) {
        case "blue":
            sdb.play();
            break;
        case "green":
            sdg.play();
            break;
        case "red":
            sdr.play();
            break;
        case "yellow":
            sdy.play();
            break;
        default:
            sdwrong.play();
            break;
    }


});

/* $(".btn").click(function() {
    alert(this.id);
}); */
console.log(userChosenColour);