
//--------------------navbar----------------------------------//

let toggleBtn=document.querySelector(".tBtn");
toggleBtn.addEventListener("click",toggle);
let tVar=false;

 function show(){
    let menu=document.querySelectorAll(".navbar li");
   //  console.log(menu)
    
    menu.forEach(function(element){
       element.style.display="block";
    })
}

function hide(){
    let menu=document.querySelectorAll(".navbar li");
   //  console.log(menu)
    
    menu.forEach(function(element){
       element.style.display="none";
    })
}

function toggle(){
if(tVar===false){
    show();
    tVar=true;
}
else if(tVar===true){
    hide();
    tVar=false
}
console.log(tVar)

}