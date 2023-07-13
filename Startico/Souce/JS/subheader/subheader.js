let myBtns=document.querySelector('.close')
let subHeader = document.querySelector('.subheader')
  
myBtns.addEventListener('click', ()=>{
    subHeader.classList.add('active')
  }) 
  
 
  let card = document.querySelectorAll('.cards_container')
  let plan = document.querySelectorAll('.plen')
  let cost = document.querySelectorAll('.cost')
  let mo = document.querySelectorAll('.mo')
  let early = document.querySelectorAll('.early')
  let inc = document.querySelectorAll('.inc')
  let sess = document.querySelectorAll('.ossession_button')
  let credit = document.querySelectorAll('.gg-credit-card')
  let punkt = document.querySelectorAll('.punkts_discription-two')
  let but = document.querySelectorAll('.button_ossesion_container')
 
 
 
  for (let index = 0; index < card.length; index++) {
    card[index].addEventListener('click', ()=>{
    card[index].classList.toggle( 'active' )
    plan[index].classList.toggle( 'active' )
    cost[index].classList.toggle('active')
    mo[index].classList.toggle('active')
    early[index].classList.toggle('active')
    inc[index].classList.toggle('active')
    sess[index].classList.toggle('active')
    credit[index].classList.toggle('active')
    punkt[index].classList.toggle('active')
    but[index].classList.toggle('active')
    
   
   
    
   
    
 
  })
   
  }



