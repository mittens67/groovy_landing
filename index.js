const navbar = document.querySelector(".nav-container");
const hamburger = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav-list");
const hamCheck = document.getElementById("nav-ham");
let navOpened = false;

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
        navOpened = false;
        navbar.classList.remove("nav_fixed");
        enableScroll();
    } else {
        navOpened = true;
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
        navOpened = false;
    }
}

//Closes nav hamburger menu
const navActionHandler = function() {
    if(navOpened) {
        navlock();
        hamCheck.checked = false;
    }
}

hamburger.addEventListener("click", navlock);
navList.addEventListener("click",navActionHandler);
window.onresize = clearNavSettings;