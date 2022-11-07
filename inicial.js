const header = document.querySelector('header');
const menu = document.querySelector('.menu-on');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

window.addEventListener('scroll', function(){
    header.classList.toggle('sticky', this.window.scrollY > 0);
})

menu.addEventListener('click', function(){
    if(!menuOpen) {
        navLinks.classList.toggle('show-navlinks');
        menu.classList.toggle('menu-off');
    } else {
        navLinks.classList.remove('show-navlinks');
        menu.classList.remove('menu-off');
        menuOpen = false;
    }
});