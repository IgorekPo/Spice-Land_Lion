const burgerMenu = document.querySelector ('.header__burger');
const headerMenu = document.querySelector ('.header__menu');

burgerMenu.addEventListener('click' , function(){
   burgerMenu.classList.toggle ('active');
   headerMenu.classList.toggle ('active');
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
phoneInput.addEventListener('keydown', (e) => {
   if (phoneInput.selectionStart <= prefix.length) {
         if (e.keyCode === 8 , e.keyCode === 46  (e.ctrlKey && e.keyCode === 88)) {
      e.preventDefault();
   }
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