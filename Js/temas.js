const temas = document.querySelector('.Fibra');
const menu = document.querySelector('.temas-nav');

console.log(menu);
console.log(temas);

temas.addEventListener('click', ()=>{
    menu.classList.toggle("spread");
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target!=menu && e.target!=temas){
        menu.classList.toggle("spread")
    }
})