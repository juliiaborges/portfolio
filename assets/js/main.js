/*=============== SHOW MENU ===============*/
const navMenu  = document.getElementById ('nav-menu'),
      navToggle= document.getElementById ('nav-toggle'),
      navClose = document.getElementById ('nav-close')
/*===== MENU SHOW ===== */
if (navToggle){
  navToggle.addEventListener ('click', () => {
    navMenu.classList.add('show-menu')
  })
}
/*===== MENU HIDDEN ====*/
if (navClose){
  navClose.addEventListener ('click', () => {
    navMenu.classList.remove('show-menu')
  })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/

let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});




/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/
const contactForm= document.getElementById('contact-form'),
      contactName= document.getElementById('contact-name'),
      contactEmail= document.getElementById('contact-email'),
      contactProject= document.getElementById('contact-project'),
      contactMessage= document.getElementById('contact-message')

const sendEmail = (e) =>{
  e.preventDefault()
  if (contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    contactMessage.textContent = 'Escreva todos os campos de entrada, por favor!'
}else{
   emailjs.sendForm('service_xmhmqfc','template_kzju0l4','#contact-form','DgZnGTzpF2LPYm4Jo')
     .then(() => {
         contactMessage.classList.add('color-blue')
         contactMessage.textContent = 'Menssagem Enviada!'

         setTimeout(() =>{
            contactMessage.textContent = ''
         },5000)
     }, (error)=>{
      alert('Ops! Algo deu errado!', error)
     })

     contactName.value =''
     contactEmail.value =''
     contactProject.value =''
}
}
contactForm.addEventListener('submit',sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById ('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem ('selected-theme')
const selectedIcon = localStorage.getItem ('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark': 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme',getCurrentTheme())
  localStorage.setitem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('bg-header')
  : header.classList.remove ('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/