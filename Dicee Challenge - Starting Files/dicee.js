var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNum1 + ".png";
var randomImageSource = "/Dicee Challenge - Starting Files/images/"
  + randomImage;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNum2 + ".png";
var randomImageSource2 = "/Dicee Challenge - Starting Files/images/" + randomImage2;

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSource2);



 if(randomImageSource > randomImageSource2)
{
  document.querySelector("h1").innerHTML = "Player 1 WON!🚩";

}
else if (randomImageSource < randomImageSource2)
{
  document.querySelector("h1").innerHTML = "Player 2 WON!🚩";
 
}


else
{
  document.querySelector("h1").innerHTML = "Draw !";
 
}
