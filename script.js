const burgerMenu = document.querySelector ('.header__burger');
const headerMenu = document.querySelector ('.header__menu');

burgerMenu.addEventListener('click' , function(){
   burgerMenu.classList.toggle ('active');
   headerMenu.classList.toggle ('active');
})

const menuLinks = document.querySelectorAll ('.header__link');

menuLinks.forEach (link =>{
   link.addEventListener('click',()=>{
   burgerMenu.classList.remove ('active');
   headerMenu.classList.remove ('active');
   })
})

document.addEventListener ('click' , (e)=>{
   if (headerMenu.classList.contains ('active') && !headerMenu.contains(e.target) && !burgerMenu.contains(e.target)){
         burgerMenu.classList.remove ('active');
   headerMenu.classList.remove ('active');
   }
})


// form TEL

const phoneInput = document.getElementById ('phone');
const prefix = '+380'

phoneInput.addEventListener ('focus', () =>{
   if(phoneInput.value === '' ){
      phoneInput.value = prefix;
   }
});
phoneInput.addEventListener ('blur', ()=>{
   if (phoneInput.value === prefix ){
      phoneInput.value = ''
   }
});
phoneInput.addEventListener('input', (e) => {
   let value = phoneInput.value;
   if (!value.startsWith(prefix)) {
   phoneInput.value = prefix + value.replace(/\D/g, '').slice(3, 12);
   }
   const digitsOnly = value.substring(prefix.length).replace(/\D/g, '');
   phoneInput.value = prefix + digitsOnly.slice(0, 9);
});
phoneInput.addEventListener('click', () => {
   if (phoneInput.selectionStart < prefix.length) {
   phoneInput.setSelectionRange(prefix.length, prefix.length);
   }
});
// ===============================================


// FAQ============================================
const faqBlock = document.querySelectorAll ('.faq__block');
const faqAnswer = document.querySelector ('.faq__answer');
const faqPlus = document.querySelector ('.faq__informations');

faqBlock.forEach (open =>{
   open.addEventListener('click' , ()=>{
   faqAnswer.classList.toggle ('active')
   faqPlus.classList.toggle ('active')
   })
})

// faqBlock.addEventListener('click', function(){
//    faqAnswer.classList.toggle ('active')
//    faqPlus.classList.toggle ('active')

// })