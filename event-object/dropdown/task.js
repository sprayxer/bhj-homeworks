const dropdownValue = document.querySelector('.dropdown__value');

function onClick() {
    const dropdownList = document.querySelector('.dropdown__list');
    dropdownList.classList.toggle('dropdown__list_active');
}

dropdownValue.addEventListener('click', onClick);



const dropdownLinks = [...document.querySelectorAll('.dropdown__link')];

function onClickk(e) {
    e.preventDefault();
    const link = e.target;
    const linkText = link.textContent.trim();
    dropdownValue.textContent = linkText;
    onClick();
}

dropdownLinks.forEach(element => element.addEventListener('click', onClickk));
