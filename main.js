const navbarBtn = document.querySelector('.navbar__icon')
const navbar = document.querySelector('.navbar__mobile')
navbarBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
})