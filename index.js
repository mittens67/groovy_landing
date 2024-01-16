const navbar = document.querySelector(".nav-container");
const hamburger = document.querySelector(".nav-btn");
const hamCheck = document.getElementById("nav-ham");

function disableScroll() {
    // Get the current page scroll position
    scrollTop = document.documentElement.scrollTop;
    scrollLeft = document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}

function navlock() {
    if(navbar.classList.contains("nav_fixed")) {
        navbar.classList.remove("nav_fixed");
        enableScroll();
    } else {
        navbar.classList.add("nav_fixed");
        disableScroll();
    }
    
}


// Needed to clear out settings if menu was opened in smaller screen then resized
function clearNavSettings() {
    if(window.innerWidth === 858) { // size at which hamburger menu is no longer visible
        navbar.classList.remove("nav_fixed");
        enableScroll();
        hamCheck.checked = false;
    }
}

hamburger.addEventListener("click", navlock);
window.onresize = clearNavSettings;