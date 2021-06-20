const menuBtn = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu__popup');
const menuClose = document.querySelector('.menu__close');

function openMenu () {
  menu.classList.add('visible');
}

function closeMenu () {
  menu.classList.remove('visible');
}

menuBtn.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
window.addEventListener('keyup', (event) => {
  if(event.key === 'Escape') {
    closeMenu();
  }
}) 