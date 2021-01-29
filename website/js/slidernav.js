
window.addEventListener('DOMContentLoaded', (event) => {
    var one = document.getElementById("slider_1");
    var two = document.getElementById("slider_2");
    var three = document.getElementById("slider_3");
    var knop1 = document.getElementById("btn1");
    
    one.style.opacity = 1;
    knop1.style.background = "white";
    one.style.display = "block";
    two.style.display = "none";
    three.style.display = "none";
    

});

function sliderchange(index) {
    var one = document.getElementById("slider_1");
    var two = document.getElementById("slider_2");
    var three = document.getElementById("slider_3");
    
    var knop1 = document.getElementById("btn1");
    var knop2 = document.getElementById("btn2");
    var knop3 = document.getElementById("btn3");

    // wat css styling in javascript
    one.style.opacity = 0;
    two.style.opacity = 0;
    three.style.opacity = 0;

    knop1.style.background = "none";
    knop2.style.background = "none";
    knop3.style.background = "none";

    // als test om te kijken of de buttons werken
    console.log("Image slider doet het ;)");
    
    // zorgt ervoor dat de plaatjes veranderen wanneer je op de buttons klikt en geeft aan waar je bent in de slider 
    // display style niet klaar
    if (index == 1) {
        one.style.opacity = 1;
        knop1.style.background = "white";
        one.style.display = "block";
        two.style.display = "none";
        three.style.display = "none";
    }
    
    if (index == 2) {
        two.style.opacity = 1;
        knop2.style.background = "white";
        one.style.display = "none";
        two.style.display = "block";
        three.style.display = "none";
        
    }

    if (index == 3) {
        three.style.opacity = 1;
        knop3.style.background = "white";
        one.style.display = "none";
        two.style.display = "none";
        three.style.display = "block";
    }
    counter = index-1;
}
var counter = 0;
setInterval(function(){
    counter += 1;
    var index = counter % 3;
    sliderchange(index + 1)
},10000)

