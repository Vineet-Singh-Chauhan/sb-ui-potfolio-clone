
//--------------------navbar----------------------------------//

let tVar = false;
let toggleBtn = document.querySelector(".tBtn");
let menu = document.querySelectorAll(".navbar li");

toggleBtn.addEventListener("click", toggle);

function toggle() {
    if (tVar === false) {
        show();
        tVar = true;
    }
    else if (tVar === true) {
        hide();
        tVar = false
    }
    // console.log(tVar)

}

function show() {
    //  console.log(menu)

    menu.forEach(function (element) {
        element.style.display = "block";
    })
}

function hide() {
    // let menu=document.querySelectorAll(".navbar li");
    //  console.log(menu)

    menu.forEach(function (element) {
        element.style.display = "none";
    })
}



//--------------------Theme-plate-toggle----------------------------------//
let themeToggleVar = false;
let palette = document.querySelector(".theme-plate");
let btn = document.querySelector(".theme-btn");
// let docStyle = getComputedStyle(document.documentElement);
// let paletteWidth=docStyle.getPropertyValue('--palette-width');
btn.addEventListener("click", themeToggle);

function themeToggle() {
    if (themeToggleVar === false) {
        showPalette();
        themeToggleVar = true;
        // console.log(themeToggleVar);
    }
    else if (themeToggleVar === true) {
        hidePalette();
        themeToggleVar = false;
        // console.log(themeToggleVar);
    }
}

function showPalette() {
    palette.style.transform = "translateX(0)";

}

function hidePalette() {
    palette.style.transform = "translateX(var(--palette-width))";
    // console.log(themeToggleVar);


}

//--------------------Theme-Switcher----------------------------------//
// let defaultSwitch=document.querySelector('.default');
// let targetedElements=document.querySelector('.btn');
// defaultSwitch.addEventListener("click",defaultColor);

// function defaultColor(){
//     targetedElements.style.backgroundColor="red";
//     // document.documentElement.style.setProperty('--pri-back-color', 'red');
// }

let defaultSwitch=document.querySelector('.default');
let flatSwitch=document.querySelector('.flat');
let sunsetSwitch=document.querySelector('.sunset');
let subtleSwitch=document.querySelector('.subtle');
let seafoamSwitch=document.querySelector('.seafoam');
let greenSwitch=document.querySelector('.green');
let pinkSwitch=document.querySelector('.pink');
let aquaSwitch=document.querySelector('.aqua');
let orangeSwitch=document.querySelector('.orange');
let tomatoSwitch=document.querySelector('.tomato');
let targetedElements=document.documentElement;


defaultSwitch.addEventListener("click",defaultColor);
function defaultColor(){
    
    document.documentElement.style.setProperty('--pri-back-color', 'rgb(0, 80, 228)');
}

flatSwitch.addEventListener("click",flatColor);
function flatColor(){
    
    document.documentElement.style.setProperty('--pri-back-color', 'rgb(52, 178, 228)');
}

sunsetSwitch.addEventListener("click",sunsetColor);
function sunsetColor(){
    
    document.documentElement.style.setProperty('--pri-back-color', 'rgb(248, 53, 53)');
}

subtleSwitch.addEventListener("click",subtleColor);
function subtleColor(){
    
    document.documentElement.style.setProperty('--pri-back-color', 'rgb(129, 131, 124)');
}

seafoamSwitch.addEventListener("click",seafoamColor);
function seafoamColor(){
    
    document.documentElement.style.setProperty('--pri-back-color', 'rgb(22, 112, 38)');
}

greenSwitch.addEventListener("click",greenColor);
function greenColor(){
    
    document.documentElement.style.setProperty('--pri-back-color', 'yellowgreen');
}

pinkSwitch.addEventListener("click",pinkColor);
function pinkColor(){
    
    document.documentElement.style.setProperty('--pri-back-color', 'pink');
}

orangeSwitch.addEventListener("click",orangeColor);
function orangeColor(){
    
    document.documentElement.style.setProperty('--pri-back-color', 'orange');
}

aquaSwitch.addEventListener("click",aquaColor);
function aquaColor(){
    
    document.documentElement.style.setProperty('--pri-back-color', 'aqua');
}

tomatoSwitch.addEventListener("click",tomatoColor);
function tomatoColor(){
    
    document.documentElement.style.setProperty('--pri-back-color', 'tomato');
}