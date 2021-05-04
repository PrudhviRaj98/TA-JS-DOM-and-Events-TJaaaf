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
function color (){
    return "#"+Math.random().toString(16).;
}
parentBox.addEventListener('mousemove' , handleMouseMove){

}