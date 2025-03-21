// Your code here

document.addEventListener("DOMContentLoaded", ()=>{
fetch("http://localhost:3000/characters")
.then(Response => Response.json())
.then(data => displayName(data))

})

const image = document.querySelector("#image");
const charName = document.querySelector("#name");
const voteCount = document.querySelector("#vote-count");
const form = document.querySelector("#votes-form");
const resetBtn = document.querySelector("#reset-btn");

function displayName(name){

    const charaCters = document.querySelector("#character-bar");
    name.forEach(names => {

        const span = document.createElement("span");
        span.innerHTML = names.name;
        charaCters.appendChild(span);

         span.addEventListener("click", ()=>{
            image.src = names.image;
            charName.innerHTML = names.name;
            voteCount.innerHTML = names.votes ;
            })
    });
  



    }

  
    form.addEventListener("submit" , (event)=>{
        event.preventDefault();
        let voteNumber = parseInt(document.querySelector("#votes").value);
          let currentVote =  parseInt(voteCount.innerHTML) || 0; 
          //console.log(currentVote);
          voteCount.innerHTML = currentVote + voteNumber;
        //  console.log(voteNumber);
       
        voteNumber = "";
      })
        resetBtn.addEventListener("click" , ()=>{

            voteCount.innerHTML = 0;

        })
   



