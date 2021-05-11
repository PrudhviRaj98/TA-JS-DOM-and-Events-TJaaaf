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
                buttonOne.addEventListener('click', byClicking);
                secondRoot.append(buttonOne );
            });
        
// ...................................................arr........
            let arr = [
                
            ];
//  ..................arr.concat.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.....           
                
            function byClicking(event){
               let one = event.target.innerText;
              got.houses.filter((elm)=>{
                  if(one == elm.name){
                    elm.people.filter((ela)=>{
                        console.log(ela);
                        var obj = {
                            image:ela.image,
                            name:ela.name,
                            des:ela.description,
                        }
                        arr.push(obj);
                        createUI();
                      });
                  }  
              });
                
            }


// .......................................console...............console.log...


            function createUI(){
                root.innerHTML = "";

                arr.forEach((partCards)=>{
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


function searching(event){
    let value = event.target.value;

    got.houses.forEach((ele)=>{
        console.log(ele);
        ele.people.forEach((elem)=>{
            let nameG = elem.name;
            if(value == nameG ){
                
                let objj = {
                    name:elem.nam,
                    image:elem.image,
                    des:elem.description
                }
                arr.push(objj);1
                createUI();
            }
        });
    });
    
}
searchh.addEventListener('keyup' , searching);


       
   
   
  
