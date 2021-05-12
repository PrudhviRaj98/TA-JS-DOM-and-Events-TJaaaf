let input = document.querySelector(`.name`);
let root = document.querySelector(`.createmovies`);

console.log(input);
let allMovies = [
     { name :"deepak"},
     { name :"d"}

    ];

input.addEventListener("keyup" , (event)=>{
    // root.innerHTML =""
    console.log(event.keyCode)
    
    if(event.keyCode === 13){
        console.log(event.target.value);
        allMovies.push({
            name : event.target.value
            
        });
        event.target.value = " ";
    
        createMovies();
    }

    

});

function createMovies(){
    root.innerHTML="";
    allMovies.forEach((movie , i) =>{
        console.log(movie);
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.classList.add('checkbox');
        input.type = "checkbox";
        input.id = i;
        let label = document.createElement("label");
        label.for = i;
        label.innerText = movie.name;
        var span = document.createElement("span");
        span.innerText = "X";
        span.addEventListener('click' , deleteMovies)
        
        li.append(input , label , span);
        root.append(li);
        console.log(root);
    });
    
}
createMovies();

function deleteMovies (event){
    event.target.parentElement.remove();
}