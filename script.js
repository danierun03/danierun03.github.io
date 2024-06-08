function mainMenu() {
    var hamImg = document.getElementById("hamburger");
    var nav = document.getElementsByTagName("nav");
    for(var i = 0; i < nav.length; i++){
        nav[i].classList.toggle("navMenu");
    }
    if(hamImg.style.backgroundColor == "rgb(106, 159, 219)"){
        hamImg.src = "images/hamburger.png";
        hamImg.style.backgroundColor = "rgba(106, 159, 219, 0)";
    }else{
        hamImg.src = "images/hamburger_clear.png";
        hamImg.style.backgroundColor = "rgb(106, 159, 219)";
    }
}