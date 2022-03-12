
//--------------------navbar----------------------------------//

{
    let tVar = false;
    let toggleBtn = document.querySelector(".tBtn");
    let menu = document.querySelectorAll(".navbar li");

    toggleBtn.addEventListener("click", toggle);

    function toggle() {
        if (tVar === false ) {
            show();
            tVar = true;
        }
        else if (tVar === true ) {
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

let defaultSwitch = document.querySelector('.default');
let flatSwitch = document.querySelector('.flat');
let sunsetSwitch = document.querySelector('.sunset');
let subtleSwitch = document.querySelector('.subtle');
let seafoamSwitch = document.querySelector('.seafoam');
let greenSwitch = document.querySelector('.pri-color');
let pinkSwitch = document.querySelector('.sec-color');

let targetedElements = document.documentElement;


defaultSwitch.addEventListener("click", defaultColor);
function defaultColor() {

    document.documentElement.style.setProperty('--pri-back-color', 'rgb(0, 80, 228)');
    document.documentElement.style.setProperty('--sec-back-color', 'var(--default-sec-color');
    let priColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--pri-back-color');
    let secColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--sec-back-color');

    document.querySelector('.color-code').innerText = priColor;
    document.querySelector('.color-code-sec').innerText = secColor;
}

flatSwitch.addEventListener("click", flatColor);
function flatColor() {

    document.documentElement.style.setProperty('--pri-back-color', 'rgb(52, 178, 228)');
    document.documentElement.style.setProperty('--sec-back-color', 'var(--flat-sec-color');
    let priColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--pri-back-color');
    // console.log
    let secColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--sec-back-color');

    document.querySelector('.color-code').innerText = priColor;
    document.querySelector('.color-code-sec').innerText = secColor;
}

sunsetSwitch.addEventListener("click", sunsetColor);
function sunsetColor() {

    document.documentElement.style.setProperty('--pri-back-color', 'rgb(248, 53, 53)');
    document.documentElement.style.setProperty('--sec-back-color', 'var(--sunset-sec-color');
    let priColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--pri-back-color');
    let secColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--sec-back-color');

    document.querySelector('.color-code').innerText = priColor;
    document.querySelector('.color-code-sec').innerText = secColor;
}

subtleSwitch.addEventListener("click", subtleColor);
function subtleColor() {

    document.documentElement.style.setProperty('--pri-back-color', 'rgb(129, 131, 124)');
    document.documentElement.style.setProperty('--sec-back-color', 'var(--subtle-sec-color');
    let priColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--pri-back-color');
    let secColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--sec-back-color');

    document.querySelector('.color-code').innerText = priColor;
    document.querySelector('.color-code-sec').innerText = secColor;
}

seafoamSwitch.addEventListener("click", seafoamColor);
function seafoamColor() {

    document.documentElement.style.setProperty('--pri-back-color', 'rgb(22, 112, 38)');
    document.documentElement.style.setProperty('--sec-back-color', 'var(--seafoam-sec-color');
    let priColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--pri-back-color');
    let secColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--sec-back-color');

    document.querySelector('.color-code').innerText = priColor;
    document.querySelector('.color-code-sec').innerText = secColor;
}

greenSwitch.addEventListener("click", showColor);
function showColor() {

    // document.documentElement.style.setProperty('--pri-back-color', 'yellowgreen');
    let colorInput1 = document.querySelector('.color-input');
    colorInput1.click();

}

let priColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--pri-back-color');
// console.log
document.querySelector('.color-code').innerText = priColor;
let secColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--sec-back-color');
// console.log
document.querySelector('.color-code-sec').innerText = secColor;

pinkSwitch.addEventListener("click", showColor2);
function showColor2() {
    // console.log("hello")
    // document.documentElement.style.setProperty('--pri-back-color', 'yellowgreen');
    let colorInput2 = document.querySelector('.color-input2');
    colorInput2.click();
    colorInput2.setAttribute('value', 'rgb(0,250,0')

}
function change2(){
    let colorInput2value = document.querySelector('.color-input2').value;
    console.log(colorInput2value)
    document.documentElement.style.setProperty('--sec-back-color',colorInput2value );
}
function change1(){
    let colorInput1value = document.querySelector('.color-input').value;
    console.log(colorInput1value)
    document.documentElement.style.setProperty('--pri-back-color',colorInput1value );
}



//-----------------------dropdowns---------------------------//
{
    let tVar = false;
    let toggleBtn = document.querySelector(".landinglink");
    let menu = document.querySelector(".landing");

    toggleBtn.addEventListener("click", toggle);
    // toggleBtn.addEventListener("c", toggle);

    function toggle() {
        if (tVar === false) {
            show();
            tVar = true;
            // console.log(tVar)

        }
        else if (tVar === true) {
            hide();
            tVar = false
            // console.log(tVar)
        }


    }

    function show() {
        //  console.log(menu)
        
        // menu.style.top = "var(--drop-width)";
        menu.style.opacity = "1";
        menu.classList.remove('d-none');
        console.log(menu.classList)

    }

    function hide() {
        // let menu=document.querySelectorAll(".navbar li");
        //  console.log(menu)

        // menu.style.top = "-1000px";
        menu.style.opacity = "0";
        menu.classList.add('d-none');
        // console.log(menu.classList)

    }
    window.onclick = function (e) {

        if (tVar == true) {
            if (e.target.matches('.landing') || !e.target.matches('.landinglink')) {
                hide();
                tVar=false;
                // console.log("FDF")


            }
        }
    }

}
//-------------------------pages drop-----------------------------------------//
{
    let tVar = false;
    let toggleBtn = document.querySelector(".page-link");
    let menu = document.querySelector(".pages");

    toggleBtn.addEventListener("click", toggle);
    // toggleBtn.addEventListener("c", toggle);

    function toggle() {
        if (tVar === false) {
            show();
            tVar = true;
            // console.log(tVar)

        }
        else if (tVar === true) {
            hide();
            tVar = false
            // console.log(tVar)
        }


    }

    function show() {
        //  console.log(menu)
        
        // menu.style.top = "var(--drop-width)";
        menu.style.opacity = "1";
        menu.classList.remove('d-none');
        // console.log(menu.classList)

    }

    function hide() {
        // let menu=document.querySelectorAll(".navbar li");
        //  console.log(menu)

        // menu.style.top = "-1000px";
        menu.style.opacity = "0";
        menu.classList.add('d-none');
        // console.log(menu.classList)

    }
    window.onclick = function (e) {

        if (tVar == true) {
            if (e.target.matches('.pages') || !e.target.matches('.page-link')) {
                hide();
                tVar=false;
                // console.log("FDF")


            }
        }
    }

}
//------------------documentation------------------/
{
    let tVar = false;
    let toggleBtn = document.querySelector(".doc-link");
    let menu = document.querySelector(".docs");

    toggleBtn.addEventListener("click", toggle);
    // toggleBtn.addEventListener("c", toggle);

    function toggle() {
        if (tVar === false) {
            show();
            tVar = true;
            // console.log(tVar)

        }
        else if (tVar === true) {
            hide();
            tVar = false
            // console.log(tVar)
        }


    }

    function show() {
        //  console.log(menu)
        
        // menu.style.top = "var(--drop-width)";
        menu.style.opacity = "1";
        menu.classList.remove('d-none');
        console.log(menu.classList)

    }

    function hide() {
        // let menu=document.querySelectorAll(".navbar li");
        //  console.log(menu)

        // menu.style.top = "-1000px";
        menu.style.opacity = "0";
        menu.classList.add('d-none');
        // console.log(menu.classList)

    }
    window.onclick = function (e) {

        if (tVar == true) {
            if (e.target.matches('.docs') || !e.target.matches('.doc-link')) {
                hide();
                tVar=false;
                // console.log("FDF")


            }
        }
    }

}