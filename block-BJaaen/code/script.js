let rootElem = document.querySelector(".firstDiv");
let result = document.querySelector(".result");
let refresh = document.querySelector(".refresh")

rootElem.addEventListener("click",userInput);
refresh.addEventListener("click" , (event)=>{
    refresh = " ";
    result.innerText = refresh;
});


function computer (){
    let arr = ["rock" , "paper" , "scissors"];
    let randomIndex = Math.floor(Math.random() * arr.length);
    console.log(arr[randomIndex]);
   return arr[randomIndex]
}


function userInput (root){

    let systemAnswer = computer();
    let clicked = root.target.dataset.option
    console.log(clicked);

    if(clicked == systemAnswer){
        return console.log("its a tie");
    }else{
        return logic(clicked, systemAnswer);
    }
    
}

function logic (user, system){
    
    if (system == "rock" && user == "scissors"  ){
        return result.innerText = "rock won"
    }
    if (system == "rock" && user == "paper"){
        return result.innerText = "paper won"
    }
    if (system == "paper" && user == "scissors"){
        return result.innerText = "scissors won"
    }
    if (system == "paper" && user == "rock"){
        return result.innerText = "paper won"
    }
    if (system == "scissors" && user == "rock"){
        return result.innerText = "rock won"
    }
    if (system == "scissors" && user == "paper"){
        return result.innerText = "scissors won"
    }   
}




