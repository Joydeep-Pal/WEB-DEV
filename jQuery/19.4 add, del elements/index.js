
//  Adding html elements

//$("<selector>").before("<html_element>");     --> adds before the selected element
//$("<selector>").after("<html_element>");      --> adds after the selected element
//$("<selector>").prepend("<html_element>");    --> adds before the contents of the selected element
//$("<selector>").append("<html_element>");     --> adds after the contents of the selected element


$("h1").before("<button>Before</button>");
$("h1").after("<button>After</button>");
$("h1").prepend("<button>Prepend</button>");
$("h1").append("<button>Append</button>");



//  Removing html element

//$("<selector>").remove();    --> removes the selected element


$("h1").remove();
