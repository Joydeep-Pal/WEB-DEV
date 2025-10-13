// For 1st image
var random1=Math.floor(Math.random()*6)+1; // 1-6
var randomimg1="./images/dice"+random1+".png";

document.querySelector(".img1").setAttribute("src",randomimg1);

// For 2nd image
var random2=Math.floor(Math.random()*6)+1; // 1-6
var randomimg2="./images/dice"+random2+".png";

document.querySelector(".img2").setAttribute("src",randomimg2);

if(random1>random2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}