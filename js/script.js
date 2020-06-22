const headerBurger = document.querySelector('.navbar-burger');
const headerList = document.querySelector('.navbar-link')
headerBurger.addEventListener('click', function () {
    this.classList.toggle('active')
    headerList.classList.toggle('active')
})

const headerLogo = document.querySelector('.navbar-logo-icon');
const headerTitle = document.querySelector('.navbar-logo-title');

headerLogo.addEventListener('mouseenter', function () {
    headerTitle.style.color = '#ffffff';
    headerLogo.style.filter = 'brightness(5.5)';
})

headerLogo.addEventListener('mouseleave', function () {
    headerTitle.style.color = '#8D81AC';
    headerLogo.style.filter = 'brightness(1)';
})

headerTitle.addEventListener('mouseenter', function () {
    headerLogo.style.filter = 'brightness(5.5)';
    headerTitle.style.color = '#ffffff';
})

headerTitle.addEventListener('mouseleave', function () {
    headerLogo.style.filter = 'brightness(1)';
    headerTitle.style.color = '#8D81AC';
})




