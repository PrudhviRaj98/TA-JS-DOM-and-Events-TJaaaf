let input = document.querySelector(".todo");
let root = document.querySelector(".ul");


let todos = [];

function createUI(){
    root.innerText = "";
    todos.forEach((todo , index)=>{
        let li =  document.createElement("li");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.setAttribute("data-id" , index);
        input.addEventListener("input", toggle);
        input.checked = todo.isDone;
        let label = document.createElement("label");
        label.innerText = todo.name ;
        let span = document.createElement("span");
        span.innerText = "X";
        span.setAttribute("data-id" , index);
        span.addEventListener('click' , deleting);
        li.append(input,label,span);
        root.append(li);
    });
    
}

function toggle(event){
    let id = event.target.dataset.id;
    todo[id].isDone = !todo[id].isDone;
    createUI();
}
function deleting(event){
    let id = event.target.dataset.id;
    todos.splice(id , 1);
    console.log(todos);
    createUI();
}

function handleInput(event){
    let value = event.target.value;
    console.log(value);
    if(event.keyCode === 13 && value !== ""){
        let todo ={
            name:value,
            isDone:false
        };
        todos.push(todo);
        event.target.value = "";
        createUI();
    }
    
}
createUI();
input.addEventListener('keyup' ,handleInput);