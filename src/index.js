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
  let NamesId  = null ;
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
               NamesId = names.id;
              })
      });
    
      }
  
    
      form.addEventListener("submit" , (event)=>{
          event.preventDefault();
          let voteNumber = parseInt(document.querySelector("#votes").value);
            let currentVote =  parseInt(voteCount.innerHTML) || 0; 
            //console.log(currentVote);
            newVotes = currentVote + voteNumber;
            voteCount.innerHTML = newVotes;
          //  console.log(voteNumber);
        let namedId  = NamesId;

          fetch(`http://localhost:3000/characters/${namedId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify( {
              votes : newVotes,
            })
          })
          .then(respon => respon.json())
          .then(data => console.log(data))
        })
          resetBtn.addEventListener("click" , ()=>{
  
              voteCount.innerHTML = 0;
            
          })


const formII = document.getElementById("character-form");
formII.addEventListener("submit", (eve)=>{
  eve.preventDefault();
  let formObject = new FormData(formII);

  formObject = {
   name: formObject.get('name'),
   image: formObject.get("image-url"),
   votes: 0,
  }


  fetch(`http://localhost:3000/characters`, {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formObject)
  })
  .then(resp => resp.json())
  .then(data => console.log(data)
  )
   
})







