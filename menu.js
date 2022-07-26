const hamburger = document.querySelector('bi-list');
const closeMenu = document.querySelector('bi-x');
const menu = document.querySelector('toggle-menu');

hamburger.addEventListener('click', () => {
    menu.style.display = 'block';
})

closeMenu.addEventListener('click', () => {
    menu.hide()
})

const aLink = document.getElementsByClassName('link');

aLink.addEventListener('click', () => {
    menu.hide()
})
