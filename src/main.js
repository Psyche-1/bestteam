(() => {
  const refs = {
    // Додати атрибут data-modal на бекдроп модалки
    openMenuBtn: document.querySelector("[data-menu-open]"),
    // Додати атрибут data-modal на бекдроп модалки
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.menu.classList.toggle("is-open");
  }
})();