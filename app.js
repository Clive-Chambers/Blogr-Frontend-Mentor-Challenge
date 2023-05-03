(() => {
  const hamburgerMenu = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const mediaSize = 991;

  hamburgerMenu.addEventListener('click', toggleNav);

  function toggleNav() {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.classList.toggle('hidden-scrolling');
  }

  navMenu.addEventListener('click', (event) => {
    if (
      event.target.hasAttribute('data-toggle') &
      (window.innerWidth <= mediaSize)
    ) {
      event.preventDefault();
      const menuItemHasChildren = event.target.parentElement;
      // if menuItemHasChildren is already expanded, collapse it
      if (menuItemHasChildren.classList.contains('active')) {
        collapseSubMenu();
      } else {
        // collapse existing expanded menuItemHasChildren
        if (navMenu.querySelector('.menu-item-has-children.active')) {
          collapseSubMenu();
        }

        menuItemHasChildren.classList.add('active');
        const subMenu = menuItemHasChildren.querySelector('.sub-menu');
        subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
      }
    }
  });
  function collapseSubMenu() {
    navMenu
      .querySelector('.menu-item-has-children.active .sub-menu')
      .removeAttribute('style');
    navMenu
      .querySelector('.menu-item-has-children.active')
      .classList.remove('active');
  }

  function resizeFix() {
    // if navMenu is open, close it
    if (navMenu.classList.contains('open')) {
      toggleNav();
    }
    // if menuItemHasChildren is expanded, collapse it
    if (navMenu.querySelector('.menu-item-has-children.active')) {
      collapseSubMenu();
    }
  }

  window.addEventListener('resize', function () {
    if (this.innerWidth > mediaSize) {
      resizeFix();
    }
  });
})();
