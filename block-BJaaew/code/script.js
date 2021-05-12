let root = document.querySelector(".firstDiv");
let secondRoot = document.querySelector(".namesGT");
let searchh = document.querySelector("#searching");

        got.houses.forEach((ele)=>{
            ele.people.forEach((peop)=>{
                console.log(peop.image);

                let div = document.createElement("div");
                div.classList.add("divOne");
                let imageOne = document.createElement("img");
                imageOne.src = peop.image;
                let h2 = document.createElement("h2");
                h2.classList.add("h2");
                h2.innerText = peop.name;
                let h3 = document.createElement('h3');
                h3.classList.add("h3");
                h3.innerText = peop.description;
                let button = document.createElement("button");
                button.classList.add("btn");
                button.innerText = "Know More";
                div.append(imageOne , h2, h3 , button);
                root.append(div);
            });
        });
// ...............arr..............................arr......arr.filter.....
        
            got.houses.forEach((elem ,  index)=>{

                console.log(elem.name);
                let buttonOne = document.createElement("button");
                buttonOne.classList.add("btnName");
                buttonOne.innerText = elem.name;
                buttonOne.setAttribute("data-id" , index);
                
                buttonOne.addEventListener('click', ()=>{
                    let peopleOfTheHouse = got.houses.find((house)=> house.name === elem.name).people
                    console.log(peopleOfTheHouse);
                    createUI(peopleOfTheHouse);
                });
                secondRoot.append(buttonOne );
            });
        
        
                
            


// .......................................console...............console.log...


            function createUI(data = []){
                root.innerHTML = "";

                data.forEach((partCards)=>{
                    let newDiv = document.createElement("div");
                    newDiv.classList.add("newDiv");
                    let imageTwo = document.createElement("img");
                    imageTwo.src = partCards.image;
                    let h2 = document.createElement("h2");
                    h2.classList.add("h2");
                    h2.innerText = partCards.name;
                    let h3 = document.createElement('h3');
                    h3.classList.add("h3");
                    h3.innerText = partCards.des;
                    let button = document.createElement("button");
                    button.classList.add("btn");
                    button.innerText = "Know More";
                    newDiv.append(imageTwo , h2, h3 , button);
                    secondRoot.append(newDiv);

                });
            }
        
///////////////////////////////////////////////////////
let allPeople = got.houses.reduce((acc,cv)=>{
    acc = acc.concat(cv.people);
    console.log(acc);
    return acc;
}, []);

function searching(event){
    let value = event.target.value;
    let filteredPeople = allPeople.filter((p)=> p.name.toLowerCase().includes(value.toLowerCase() ));
    createUI(filteredPeople);
    
    
}
searchh.addEventListener('input' , searching);


       
   
   
  
