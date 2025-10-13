
function Guest(Name,Age,languageKnown){
    this.Name = Name;
    this.Age = Age;
    this.languageKnown = languageKnown;
    this.sayHello = function (){
        console.log("Hello");
    }
}

var guest1 = new Guest("ABC",19,["bengali","english"]);
var guest2 = new Guest("DEF",22,["bengali","english","japanese"]);

console.log(guest1.Name); // ABC
console.log(guest1.Age);  // 19
console.log(guest1.languageKnown);  //["bengali","english"]
console.log(guest1.sayHello());  // Hello