let ban = document.querySelector(".banner");
let first = document.querySelector(".first");
ban.addEventListener('click' , function(){
    let color = '#' + Math.random().toString(16).slice(2,8);
    first.style.backgroundColor = color;
    first.innerHTML = backgroundColor;
});


let banB = document.querySelector(".banner");
let second = document.querySelector(".second")[1];
banB.addEventListener('onmousemove' , function(){
    let color = '#' + Math.random().toString(16).slice(2,8);
    second.style.backgroundColor = color;
    second.innerHTML = backgroundColor;
});





