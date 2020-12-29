window.addEventListener('DOMContentLoaded', (event) => {
    var one = document.getElementById("slider_1");
    one.style.opacity = 1;
});

function sliderchange(index) {
    var one = document.getElementById("slider_1");
    var two = document.getElementById("slider_2");
    var three = document.getElementById("slider_3");

    one.style.opacity = 0;
    two.style.opacity = 0;
    three.style.opacity = 0;

    console.log("lol");
    
    if (index == 1) {
        one.style.opacity = 1;
    }
    
    if (index == 2) {
        two.style.opacity = 1;
    }

    if (index == 3) {
        three.style.opacity = 1;
    }

}