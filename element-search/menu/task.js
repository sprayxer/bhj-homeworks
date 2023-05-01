const menuLinks = [...document.querySelectorAll('.menu__link')];
function onClick(e) {
    const link = e.target; // текущая ссылка, на которую кликнули 
    const item = link.closest('.menu__item'); // первый родитель '.menu__item' клика
    const menu = item.querySelector('.menu_sub'); // первый элемент с классом у родителя клика
    if (!menu) {
        return;
    }
    menu.classList.toggle('menu_active');

    const mainMenu = item.closest('.menu_main');
    const restMenus = [...mainMenu.querySelectorAll('.menu')]
        .filter(m => m !== menu)
        .forEach(m => m.classList.remove('menu_active'));

    e.preventDefault();
};

menuLinks.forEach(link => link.addEventListener('click', onClick));