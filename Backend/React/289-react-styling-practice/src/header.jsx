import React from "react";

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
var title = "";
var color = "";

var customStyle = {
    color : ""
}

const hour=(new Date()).getHours();

if(hour>=0 && hour <=12){
    title = "Good Morning";
    customStyle.color = "red";

}else if(hour>=13 && hour<=18){
    title = "Good Afternoon";
    customStyle.color = "green";
}else{
    title = "Good Evening";
    customStyle.color = "blue";
}

function Heading(){
    return(
        <h1 className="heading" style={customStyle}>{title}</h1>
    );
}

export default Heading;