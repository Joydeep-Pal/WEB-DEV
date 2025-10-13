
// (1) Changing text

// $("<selector>").text("<new text>");

$("h1").text("Hii");



// (2) Changing HTML properties

// $("<selector>").html("<tag> text </tag>");

$("h1").html("<i>Bye</i>");



// (3) Changing CSS properties

// $("<selector>").css("<property> , <value>");
// $("<selector>").css("<property>");  -> returns the value of the property

$("h1").css("color","red");



// (4) Class Maniputation

// $("<selector>").addClass("<class1_name> <class2_name>  ....");
// $("<selector>").removeClass("<class1_name> <class2_name>  ....");
// $("<selector>").hasClass("<class_name>");  -> returns true/false

$("h1").addClass("temp margin");
