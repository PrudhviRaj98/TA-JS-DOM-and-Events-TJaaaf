let InputText = document.getElementById('text')
let root = document.querySelector('.ul')
let allTodos = JSON.parse(localStorage.getItem('todos')) || [];


function handleInputs(event){
    // event.preventDefault();
   let value =  event.target.value;
  if(event.keyCode === 13 && value != ""){
    let todo = {
        name : value,
        isDone : false,
    }
    allTodos.push(todo);
    event.target.value = "";
    createUi();
    // console.log(allTodos); 
  }
//   console.log(value)
}
function toggleInputs(event){
    let id = event.target.dataset.id;
    allTodos[id].isDone = !allTodos[id].isDone
    createUi();
}

function createUi(){
    root.innerHTML = "";
    allTodos.forEach((elem, index) => {
        let li = document.createElement('li')

        let input = document.createElement('input')
        input.type = "checkbox"
        input.classList.add('checkbox')
        input.innerHTML = elem.isDone;
        if(input.checked === true){
            name.style.textDecoration = "line-through"
        }
        localStorage.setItem('todos',JSON.stringify(allTodos))
        
        input.setAttribute("data-id", index)
        input.addEventListener('input', toggleInputs)


        let name = document.createElement('p')
        name.innerHTML = elem.name
        name.classList.add("name")


        let cross = document.createElement('span')
        cross.innerHTML = '❌';
        cross.classList.add('cross')
        cross.setAttribute("data-id", index)
        cross.addEventListener('click', (event) => {
            let id = event.target.dataset.id;
            allTodos.splice(id,1);
            createUi();
            console.log(id);
            localStorage.setItem("todos",JSON.stringify(allTodos))
        } )

        li.append(input,name,cross)
        root.append(li)  
    })
}

InputText.addEventListener("keyup", handleInputs)

let complete = document.getElementById("completed")
complete.addEventListener('click', () => {
    root.style.display = "none"
})

let all = document.getElementById('all')
all.addEventListener('click',()=> {
    root.style.display = "block"
})