let input = document.querySelector(".todo");
let root = document.querySelector(".ul");
let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");
let clear = document.querySelector(".clear");
let activeButton = "all";
let todos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

function createUI(data = todos){
    root.innerText = "";
    data.forEach((todo , index)=>{
        let li =  document.createElement("li");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.checked = todo.isDone;
        input.setAttribute("data-id" , index);
        input.addEventListener("input", toggle);
        
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
    localStorage.setItem('todos',JSON.stringify(todos));
}
function deleting(event){
    let id = event.target.dataset.id;
    todos.splice(id , 1);
    
    createUI();

    localStorage.setItem('todos',JSON.stringify(todos));
}

function handleInput(event){
    let value = event.target.value;
    console.log(value);
    if(event.keyCode === 13 && value !== ""){
        let todo ={
            name:value,
            isDone:false,
        };
        todos.push(todo);
        event.target.value = "";
        createUI();
        localStorage.setItem('todos',JSON.stringify(todos));
    }
    
}
createUI();

clear.addEventListener('click',()=>{
   todos = todos.filter(todo => !todo.isDone);
   createUI();
   localStorage.setItem('todos',JSON.stringify(todos));
});

active.addEventListener('click',()=>{
    let notCompleted = todos.filter(todo => !todo.isDone);
    createUI(notCompleted);
    activeButton = "active";
    updateActiveButton();
});

completed.addEventListener('click',()=>{
    let completedTodos = todos.filter(todo => todo.isDone);
    createUI(completedTodos);
    activeButton = "completed";
    updateActiveButton();
});

all.addEventListener('click',()=>{
    createUI();
    activeButton = 'all';
    updateActiveButton();
});

function updateActiveButton(btn = activeButton){
    all.classList.remove('selected');
    active.classList.remove('selected');
    completed.classList.remove('selected');

    if(btn === 'all'){
        all.classList.add('selected');
    }if(btn === 'active'){
        active.classList.add("selected");
    }if(btn === 'completed'){
        completed.classList.add('selected');
    }
}
updateActiveButton();
input.addEventListener('keyup' ,handleInput);