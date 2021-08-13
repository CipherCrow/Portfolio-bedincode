/* mostrar menu */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose  = document.getElementById('nav-close'),
    navlink   = document.querySelectorAll('.nav__link');

//valida se existe a constante e abre menu
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('mostrar-menu');
    });
}
//valida se existe constante e fecha menu
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('mostrar-menu');
    })
}
//sair do menu quanto clicar
function linkAction(){
    navMenu.classList.remove('mostrar-menu');
}
navlink.forEach(e=>{e.addEventListener('click',linkAction)});