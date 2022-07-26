const hamburger = document.querySelector('bi-list');
const closeMenu = document.querySelector('bi-x');
const menu = document.querySelector('add-menu');

const closeItem = function() {
    menu.classList.toggle('no-display');
}

const addMenu = function() {
    menu.classList.toggle('toggle-menu');
}

hamburger.addEventListener('click', function() {
   addMenu();
})

closeMenu.addEventListener('click', function() {
    closeItem();
})

const aLink = document.getElementsByClassName('link');

aLink.addEventListener('click', function() {
    closeItem();
})
