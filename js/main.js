const menuBtn = document.querySelector('.header__menu-icon');

function menuCall (event) {
  event.target.classList.toggle('active');
}

menuBtn.addEventListener('click', menuCall)