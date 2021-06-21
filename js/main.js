window.addEventListener('DOMContentLoaded', () => {
  window.dispatchEvent(new Event('resize'));
  const menuBtn = document.querySelector('.menu__icon');
  const menu = document.querySelector('.menu__popup');
  const menuClose = document.querySelector('.menu__close');
  const body = document.querySelector('body');

  function openMenu() {
    menu.classList.add('visible');
    body.style.overflowY = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('visible');
    body.style.overflowY = 'auto';
  }

  menuBtn.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  window.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  // Tabs
  const tabClick = (idContainer, idElement) => {
    let dataAttr = `[data-${idContainer}`;
    for (let item of document.querySelectorAll(`${dataAttr}-name`)) {
      item.classList.remove('about__nav-link_active');
    }
    for (let item of document.querySelectorAll(`${dataAttr}-tab`)) {
      item.classList.remove('about__tab_active');
    }

    document
      .querySelector(`${dataAttr}-name=${idElement}]`)
      .classList.add('about__nav-link_active');
    document
      .querySelector(`${dataAttr}-tab=${idElement}]`)
      .classList.add('about__tab_active');
  };

  let tabsName = document.querySelectorAll('.about__nav-link');

  tabsName.forEach((tab) => {
    tab.addEventListener('click', (event) => {
      tabClick(
        event.target.parentElement.id,
        event.target.dataset.aboutTabsName
      );
    });
  });

  // Smooth scroll
  const scroll = new SmoothScroll(
    '.header-nav__link[href*="#"], .up[href*="#"]'
  );

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

  // swiper

  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 6,
    observer: true,
    observeParents: true,
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.clients__next',
      prevEl: '.clients__prev',
    },
  });
});
