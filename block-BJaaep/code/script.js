let allBoxes = document.querySelectorAll(".first li");
allBoxes.forEach((ele , index ) => {
    ele.addEventListener("click" , (event) =>{
        event.target.innerText =  index+1;
        setTimeout(()=>{
            event.target.innerText = "";
        }, 5000);
    });
});

let second = document.querySelector(".second");
second.addEventListener("click" , (event)=>{
    let text = event.target.dataset.text;
    event.target.innerText = text;
    setTimeout(()=>{
        event.target.innerText = "";
    }, 5000);
});