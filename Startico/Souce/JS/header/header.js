let menu =document.querySelector('.menu_icon')

if(menu){
let menuBody = document.querySelector('.nav_container')
 menu.addEventListener('click', ()=>{
document.body.classList.toggle('lock')
menu.classList.toggle('active');
menuBody.classList.toggle('active')
 })
}







