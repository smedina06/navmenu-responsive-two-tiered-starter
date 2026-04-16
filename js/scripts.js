//  Yet another way to add the current year to the footer
document.querySelector("#copyright").textContent = new Date().getFullYear();


// mobile menu 
const navigationMenu = document.getElementById("navmenu");
const navButton = document.getElementById("toggle-menu");

function toggleMenu() {
    let isVisble = navigationMenu.getAttribute("data-visible");

    if(isVisble === "false") {
        if(navigationMenu.classList.contains("active")){
            navigationMenu.setAttribute("data-visible", "true");
            navButton.setAttribute("data-visible", "true");
        }
        else {
            dataDisplay();
            setTimeout(toggleMenu, 200);
        }
    }
    else {
        navigationMenu.setAttribute("data-visible", "false");
        navButton.setAttribute("data-visible", "false");
        setTimeout(dataDisplay, 200);
    }

    function dataDisplay() {
        navigationMenu.classList.toggle("active");
    }
}

navButton.addEventListener("click", toggleMenu);