// (() => {
//   const refs = {
//     openMobileMenuBtn: document.querySelector("[data-mobile-menu-open]"),
//     closeMobileMenuBtn: document.querySelector("[data-mobile-menu-close]"),
//     mobileMenu: document.querySelector("[data-mobile-menu]"),
//   };

//   refs.openMobileMenuBtn.addEventListener("click", toggleMobileMenu);
//   refs.closeMobileMenuBtn.addEventListener("click", toggleMobileMenu);

//   function toggleMobileMenu() {
//     refs.mobileMenu.classList.toggle("is-hidden");
//   }
// })();


// ВТОРОЙ ВАРИАНТ

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-button]'),
    closeMenuBtn: document.querySelector('[data-menu-button-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();

// ТРЕТИЙ ВАРИАНТ

// (() => {
//   const mobileMenu = document.querySelector("[data-menu]");
//   const openMenuBtn = document.querySelector("[data-menu-open]");
//   const closeMenuBtn = document.querySelector("[data-menu-close]");

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute("aria-expanded") === "true" || false;
//     openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
//     mobileMenu.classList.toggle("is-open");

//     const scrollLockMethod = !isMenuOpen
//       ? "disableBodyScroll"
//       : "enableBodyScroll";
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener("click", toggleMenu);
//   closeMenuBtn.addEventListener("click", toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove("is-open");
//     openMenuBtn.setAttribute("aria-expanded", false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();