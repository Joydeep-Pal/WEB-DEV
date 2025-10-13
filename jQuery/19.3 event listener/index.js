
// Adding Event Listener

// $("<selector>").<event_type>(function(){
//      ------------------------
// });


$("h1").click(function(){
    $("h1").css("background-color","orange");
    $("h1").css("color","purple");
});


$(document).keydown(function(){
    setTimeout(function(){
        $("h1").css("background-color","black");
        $("h1").css("color","white");
    },100);
});