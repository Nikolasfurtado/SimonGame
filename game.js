//audio import
{
    var sdb = new Audio("sounds/blue.mp3");
    var sdg = new Audio("sounds/green.mp3");
    var sdr = new Audio("sounds/red.mp3");
    var sdy = new Audio("sounds/yellow.mp3");
    var sdwrong = new Audio("sounds/wrong.mp3");
}
//user selection code
var userClickedPattern = []; //to memorize user colors
var userChosenColour; //to get color wich user clicked
//get buttons clicked

$(".btn").on("click", function() {

    nextSequence()
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
    return userChosenColour;
});



var randomSeq; //for storing random bt 0 and 3
var btnClrs = ["red", "blue", "green", "yellow"];
var choosenColor; //after random a nb put it value as the variabe 
var gamePattern = []; //to memorize colors from choosenColor

//select a random number
function nextSequence() {
    randomSeq = Math.floor(Math.random() * 4);
    choosenColor = btnClrs[randomSeq];
    gamePattern.push(choosenColor);

    $("#" + choosenColor).click(function() {
        $("#" + choosenColor).addClass("pressed")
        setTimeout(() => {
            $("#" + choosenColor).removeClass("pressed")
        }, 100);
    })
    return randomSeq;

}
//animation to the btn
//nned to put in a fnction?






/* $(".btn").click(function() {
    alert(this.id);
}); */
console.log(choosenColor)