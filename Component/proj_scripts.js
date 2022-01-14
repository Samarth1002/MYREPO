const barToggler = document.querySelector('.navbar-bar-toggler-icon')
console.log(barToggler);

const closeToggler = document.querySelector('.navbar-close-toggler-icon')
console.log(closeToggler);

const navCnt = document.querySelector('.ul-list')
console.log("nav items", navCnt);

const handleBarClick = (e) => {
    e.preventDefault();
    const barDisplay = window.getComputedStyle(barToggler).display.value = "none";

    barToggler.style.display = barDisplay;

    const closeDisplay = window.getComputedStyle(closeToggler).display.value = "flex";

    closeToggler.style.display = closeDisplay;

}

const handleCloseClicks = (e) => {

    e.preventDefault();

    barToggler.style.display = window.getComputedStyle(barToggler).display.value = "flex";

    closeToggler.style.display = window.getComputedStyle(closeToggler).display.value = "none";

}

barToggler.addEventListener('click', handleBarClick);

closeToggler.addEventListener('click', handleCloseClicks);