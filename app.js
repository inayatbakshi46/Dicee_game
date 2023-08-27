
  
var result = document.querySelector(".result");
var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");
var btn =  document.querySelector(".btn");
btn.addEventListener("click" , function() {
  var randNum1 = Math.floor(Math.random() * 6 + 1);
  var randNum2 = Math.floor(Math.random() * 6 + 1);
winnerChecker(randNum1, randNum2);
  
});
function winnerChecker(num1, num2) {
diceImg(num1, num2);
if (num1 < num2) {
 result.textContent = "Player 2 wins";
} else if (num1 > num2) {
  result.textContent = "Player 1 wins";
} else if (num1 === num2) {
  result.textContent = "It's a draw";
}
}
function diceImg(num1, num2) {
dice1.setAttribute("src", "./images/dice" + num1 + ".png");
dice2.setAttribute("src", "./images/dice" + num2 + ".png");
}
