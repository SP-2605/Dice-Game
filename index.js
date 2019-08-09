// DICE-1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImg1 = "dice" + randomNumber1 + ".png";
var randomDisplayImg1 = "images/" + randomImg1;
document.querySelector(".img1").setAttribute("src", randomDisplayImg1);
// DICE-2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImg2 = "dice" + randomNumber2 + ".png";
var randomDisplayImg2 = "images/" + randomImg2;
document.querySelector(".img2").setAttribute("src", randomDisplayImg2);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player-1 Wins🤩";
}
else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML = "Player-2 Wins🤩";
}
else
{
  document.querySelector("h1").innerHTML = "DRAW😂 ";
}
