//abre e fecha menu ao clicar no icone: controle e X
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

console.log(toggle)

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//clicar em item do menu para fechar menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//mudar o header da pagina quando der scroll
const header = document.querySelector('header') 
const navHeight = header.offseatHeight

window.addEventListener('scroll', function() {   
  if(window.scrollY >= navHeight ){
    // Scroll é maior que a altura do header
     header.classList.add('scroll')

   }  else {

    //menor que a altura do header
    header.classList.remove('scroll')     
  }
}) 

/*Testimonials: Slider, Carousel, Swiper;*/
const swiper = new Swiper('.swiper', {
  SlidesPerView: 1,
  pagination: { 
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  
  breakpoints: {
    767: {
      slidesPerView: 2, 
      setWrapperSize: true 
     
   }
   }
   
})

/* mostrar elementos quando der scroll na page*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
`#home .image, #home .text,
 #about .image, #about .text,
 #services header, #services .card,   
 #testimonials header, #testimonials .testimonials,
 #contacts .text, #contacts .link,
 footer .brand, footer .social


`, {interval:100 }  )

/*botão voltar para o topo*/
const backToTopButton = document.querySelector('.back-to-top') 
window.addEventListener('scroll', function(){
  if(window.scrollY >= 560){
    backToTopButton.classList.add('show')
  } else {backToTopButton.classList.remove('show')}
} )

/* destacar menu selecionado */
function destaqueMenu (){

  
}
