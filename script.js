const navContainer = document.querySelector(".navbarContainer")
console.log(navContainer.style.display);

const closeTogglerIcon = document.querySelector('.navbar-close-toggler-icon')

// console.log(closeTogglerIcon);

const togglerIcon = document.querySelector('.navbar-bar-toggler-icon')


const handleBarClicks = (e) => {
    e.preventDefault();
    const currStyle = window.getComputedStyle(navContainer).display.value = "flex"
    console.log(currStyle);
    navContainer.style.display = currStyle;

    const closeDisplay = window.getComputedStyle(closeTogglerIcon).display.value = "flex";

    closeTogglerIcon.style.display = closeDisplay;

    const barDisplay = window.getComputedStyle(togglerIcon).display.value = "none"

    togglerIcon.style.display = barDisplay;


}

const handleCloseClicks = (e) => {
    e.preventDefault();
}

togglerIcon.addEventListener('click', handleBarClicks);

