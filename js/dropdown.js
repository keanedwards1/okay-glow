const dropdown = document.querySelector('.dropdown');
const menuButton = dropdown.querySelector('.menu-button');
const menuSvg = dropdown.querySelector('.menu-svg');
const dropdownMenu = dropdown.querySelector('.dropdown-menu');

menuButton.addEventListener('click', () => {
    menuSvg.classList.toggle('rotate');
    dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
        menuSvg.classList.remove('rotate');
        dropdownMenu.classList.remove('show');
    }
});