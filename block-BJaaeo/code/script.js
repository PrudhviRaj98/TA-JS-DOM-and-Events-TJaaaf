let boxes = document.querySelectorAll("button");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let display = document.querySelector(".calc-screen");


let intial = 0;
display.innerText = intial;


function handleEvent (event){
    console.log(event.target.innerText);
    // display.innerText += event.target.innerText; 
    if(event.target.classList.contains('equal')){
        console.log("equal")
        display.innerText =  eval(display.innerText);
        return;
    }
    if(event.target.classList.contains("clear")){
        display.innerText = intial;
    }
     
    if( display.innerText == intial){
        display.innerText =  event.target.innerText;
    }else{
        display.innerText += event.target.innerText;
    }
}

boxes.forEach((ele)=>{
    ele.addEventListener("click" ,handleEvent );
});



