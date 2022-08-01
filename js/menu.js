// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('.menu-open-btn'),
//     closeMenuBtn: document.querySelector('.menu-close-btn'),
//     menu: document.querySelector('.backdrop'),
//     menuItem: document.querySelector('.mob-menu'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);
//   refs.menu.addEventListener('click', removeMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle('is-hidden');
//   }
//   function removeMenu(e) {
//     if (e.target === refs.menu) {
//       refs.menu.classList.add('is-hidden');
//     }
//   }
// })();

const openMenuBtnEl = document.querySelector('.btn-menu');
console.log(openMenuBtnEl);
const closeMenuBtnEl = document.querySelector('.btn-cross');
console.log(closeMenuBtnEl);

openMenuBtnEl.addEventListener('click', onOpenMenu);
closeMenuBtnEl.addEventListener('click', onCloseMenu);

function onOpenMenu() {
  document.body.classList.add('menu-open');
}

function onCloseMenu() {
  document.body.classList.remove('menu-open');
}
