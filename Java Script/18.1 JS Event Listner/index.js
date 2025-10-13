document.querySelector(".btn").addEventListener("click",function (){
    document.querySelector("h2").innerHTML="Button Pressed";
    this.style.color="red";
})