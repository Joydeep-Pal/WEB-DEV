
// Hide element

// $("<selector>").hide();     --> hide an element
// $("<selector>").show();     --> unhide an element
// $("<selector>").toggle();   --> toggles hide/show an element

$(".hide").click(function(){
    $("h1").toggle();
})



// Fade element

// $("<selector>").fadeOut();      --> fade out an element
// $("<selector>").fadeIn();       --> fade in an element
// $("<selector>").fadeToggle();   --> toggles fadeOut/fadeIn an element

$(".fade").click(function(){
    $("h1").fadeToggle();
})



// Slide element

// $("<selector>").slideUp();      --> slide element up
// $("<selector>").slideDown();    --> slide element down

$(".slide").click(function(){
    $("h1").slideToggle();
})



// Animate element

// this help to change css of the selected element. But we can only use those properties that have value
// $("<selector>").animate({property : value});

$(".animate").click(function(){
    $("h1").animate({opacity:0.5});
})