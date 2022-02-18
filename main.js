const $navbar__menu = document.querySelectorAll(".navbar__menu>button");
const $nav__home = document.querySelector("#nav__home");
const $nav__toon = document.querySelector("#nav__toon");


const toToon = function(){
    document.querySelector(".contents__genre").style.display = "block"
}
const toHome = function(){
    document.querySelector(".contents__genre").style.display = "none"
}

for(let x of $navbar__menu){
    if(x===$nav__toon){
        x.onclick = toToon;
    }else{
        x.onclick = toHome;
    }
}
