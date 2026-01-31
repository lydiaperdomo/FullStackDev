







var randomNumber1 = Math.floor(Math.random() * 6) + 1;


var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


var player1Name = document.querySelectorAll("input")[0].value || "Player 1";
var player2Name = document.querySelectorAll("input")[1].value || "Player 2";



if (randomNumber1 > randomNumber2) {
    document.querySelector('p').innerHTML = player1Name + '🏆';
} else if (randomNumber2 > randomNumber1) {
    document.querySelector('p').innerHTML = '🏆' + player2Name;
} else {
    document.querySelector('p').innerHTML = 'Draw!';
}


