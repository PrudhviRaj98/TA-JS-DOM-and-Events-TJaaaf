
let first = document.querySelector(".first");
first.addEventListener('click' , function(){
    first.style.backgroundColor = generate();
    first.innerHTML = backgroundColor;
});

function generate (){
    let color = '#' + Math.random().toString(16).slice(2,8);
    return color
}

let boxTwo = document.querySelector(".second");

boxTwo.addEventListener('mousemove' , function(){
    boxTwo.style.backgroundColor = generate();
    boxTwo.innerHTML = backgroundColor;
});







