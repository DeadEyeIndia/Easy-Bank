const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeMenu = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function() {
    console.log('Hello World!');

    if(header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open'); //Close hamburger menu
        fadeMenu.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
        
    }
    else {
        body.classList.add('noscroll');
        header.classList.add('open'); //Open hamburger menu
        fadeMenu.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        
    }
});