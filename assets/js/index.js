// navbar toogle
const toogleButton = document.getElementsByClassName('toogle')[0];
const navbarItem = document.getElementsByClassName('navbar-item');
toogleButton.addEventListener('click', function() {
    for(let i = 0; i < navbarItem.length; i++) {
        navbarItem[i].classList.toggle('active');
    }
});         