const hamburger = document.querySelector('.bi-list');
const closeMenu = document.querySelector('.bi-x');
const menu = document.querySelector('.add-menu');
const navLinks = document.querySelectorAll('.link');

const closeItem = function () {
  menu.classList.remove('toggle-menu');
  menu.classList.add('no-display');
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

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeItem();
  });
});
