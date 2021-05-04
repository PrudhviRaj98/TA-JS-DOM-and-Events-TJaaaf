function random(max){
    return Math.floor(Math.random() *max);
}
let parentBox = document.querySelector(".boxes")
for( i = 0 ; i < 500 ; i++){
    let div = document.createElement("div");
    div.classList.add("box");
    let h3 = document.createElement("h3");
    h3.classList.add("h3");
    let randon = random(500);
    h3.innerText =  randon;
    div.append(h3);
    parentBox.append(div);

}


function randomColor (max){
    let hex = ["0" , "1","3" , "4","5" , "6","7" , "8","9" , "a","b" , "c","d" , "e","f" ];
    let color = "#";
    for(let i = 0 ; i < 6 ; i++){
        let randomNumber = Math.floor(Math.random()*16);
        color = color + hex[randomNumber];
    }
    return color
}

// function color (max){
//     let color = '#' + Math.random().toString(16).slice(2,8);
//     return color
// }
function moveMouse() {
    let allBoxes =  document.querySelectorAll("box");
    allBoxes.forEach((ele)=>{
        ele.style.backgroundColor =  randomNumber();
        ele.children[0].innerText = randomNumber(500);
    });
}
parentBox.addEventListener("mousemove" , moveMouse);