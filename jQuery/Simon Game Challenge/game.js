var buttonColors = ["red","blue","green","yellow"];
var gamePattern= [];
var userClickedPattern= [];

var started= false;

var level= 0;


function nextSequence(){

    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    playSound(randomChosenColor);
    animatePress(randomChosenColor);

    level++;
    $("#level-title").text("Level "+level);
}


$(".btn").click(function(){

    var userChosenColor = $(this).attr("id");
    
    userClickedPattern.push(userChosenColor);
    
    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer((userClickedPattern.length)-1);
    
});


function playSound(name){

    var audio = new Audio('./sounds/'+name+'.mp3');
    audio.play();

}


function animatePress(currentcolor){

    $("#"+currentcolor).addClass("pressed");

    setTimeout(function (){
        $("#"+currentcolor).removeClass("pressed");
    }, 100);

}


$(document).keydown(function(){

    if(started==false){
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }

});


function checkAnswer(currentLevel){

        if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){

            console.log("success");

            if(gamePattern.length===userClickedPattern.length){

                setTimeout(function(){
                    nextSequence();
                }, 1000);

            }

        }

        else{

            console.log("wrong");

            var audio = new Audio("./sounds/wrong.mp3");
            audio.play();

            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            }, 200);

            $("#level-title").text("Game Over, Press Any Key to Restart");

            startOver();

        }
}


function startOver(){

    level=0;
    started=false;

    gamePattern=[];

}