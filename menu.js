const hamburger = document.querySelector('.bi-list');
const closeMenu = document.querySelector('.bi-x');
const menu = document.querySelector('.add-menu');
const navLink = document.querySelectorAll('.link');

const closeItem = function () {
  menu.classList.toggle('no-display');
};

const addMenu = function () {
  menu.classList.toggle('toggle-menu');
};

hamburger.addEventListener('click', () => {
  addMenu();
});

closeMenu.addEventListener('click', () => {
  closeItem();
});

navLink.forEach(link => {
  navLink.addEventListener('click', () => {
    closeItem();
  });
});
