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

const socialAliasList = document.getElementById("social-alias-list")
function showSocialsMenu() {
    socialAliasList.classList.toggle("display");
}

const socialAliasMenuListItems = document.getElementById('social-alias-list').querySelectorAll('li');
const socialLinksList = document.getElementById('socials-list');
const socialLinksListItems = socialLinksList.querySelectorAll('ul');


socialAliasMenuListItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        document.getElementById("social-alias").textContent = event.target.textContent
        for(var i = 0; i < socialLinksListItems.length; i++){
            socialLinksListItems[i].style.display = "none";
        }
        socialLinksListItems[index].style.display = "flex"
        socialAliasList.classList.toggle("display");
    })
})