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

/* Habilidades */
const habilidadesContent = document.getElementsByClassName("habilidades__content"),
      habilidadesHeader =  document.querySelectorAll(".habilidades__header");

function toggleHabilidade(){
    let itemClass = this.parentNode.className;
    for( i = 0;i < habilidadesContent.length;i++ ){
        habilidadesContent[i].className = 'habilidades__content habilidades__fechado';
    }
    if(itemClass === 'habilidades__content habilidades__fechado'){
        this.parentNode.className = 'habilidades__content habilidades__aberto'
    }
}
habilidadesHeader.forEach((el) =>{
    el.addEventListener('click',toggleHabilidade);
})

/* Qualificacão */
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContent =>{
            tabContent.classList.remove("qualificacao__active")
        })
        target.classList.add('qualificacao__active');

        tabs.forEach(tab=>{
            tab.classList.remove('qualificacao__active')
        })
        tab.classList.add('qualificacao__active')
    })
})

//janela modal
const   modalViews = document.querySelectorAll('.servicos__modal'),
        modalBtns  = document.querySelectorAll('.servicos__button'),
        modalCloses= document.querySelectorAll('.servicos__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn,i) => {
    modalBtn.addEventListener('click',()=>{
        modal(i);
    })
})
modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal');
        })
    })
})