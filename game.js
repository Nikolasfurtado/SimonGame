//document.addEventListener("onload", nextSequence)
var gamePattern = [];
var randomSeq;
var btnClrs = ["red", "blue", "green", "yellow"];
var choosenColor = btnClrs[nextSequence()];
gamePattern.push(choosenColor);

function nextSequence() {

    randomSeq = Math.floor(Math.random() * 4);
    /*  switch (randomSeq) {
         case 4:
             randomSeq = 0
             break;
         case 5:
             randomSeq = 1
             break;
         case 6:
             randomSeq = 2
             break;
         case 7:
             randomSeq = 3
             break;

         case 8:
             randomSeq = 0
             break;
         case 9:
             randomSeq = 1
             break;

         default:
             randomSeq;
             break;
     }
     return randomSeq; */
}

console.log(randomSeq);