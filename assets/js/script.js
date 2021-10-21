/*declaring constants*/
const head = document.getElementById('head');
const logo = document.getElementById('logo');
const btnCta = document.getElementsByClassName('btn-cta');


/*declaring functins*/
function scrollFunction() {
   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
     head.classList.add('head--background');
     logo.classList.add('logo--sm');
   } else {
     head.classList.remove('head--background');
     logo.classList.remove('logo--sm');
   }
}

function btnAnimation(){
   let interval = setInterval(() => {
         
      btnCta[0].classList.toggle('btn--focused');
      btnCta[1].classList.toggle('btn--focused');
             
   }, 600);
}


/*calling functions*/
window.onscroll = function() {scrollFunction()};
window.onload = btnAnimation();