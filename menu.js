const hamburger = document.querySelector('.bi-list');
const closeMenu = document.querySelector('.bi-x');
const menu = document.querySelector('.add-menu');
const logo = document.querySelector('.nav-logo');

const closeItem = function() {
    menu.classList.toggle('no-display');
}

const addMenu = function() {
    menu.classList.toggle('toggle-menu');
    logo.classList.toggle('no-display');
}

hamburger.addEventListener('click', () => {
  addMenu();
});

closeMenu.addEventListener('click', function() {
    closeItem();
});
