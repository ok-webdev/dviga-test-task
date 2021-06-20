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


// Smooth scroll
// Smooth scroll
const scroll = new SmoothScroll('.header-nav__link[href*="#"], .up[href*="#"]');

// Up arrow

const upButton = document.querySelector('.up');

const scrollShow = () => {
  const scrolled = window.pageYOffset;
  
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    upButton.classList.add('up_show');
  }
  if (scrolled < coords) {
    upButton.classList.remove('up_show');
  }
};
const scrollBack = () => {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(scrollBack, 0);
  }
};

window.addEventListener('scroll', scrollShow);
upButton.addEventListener('click', scrollBack);