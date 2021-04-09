const nav = document.querySelector(".nav-links");
const closeMenu = document.querySelector(".closeHam");
const openMenu = document.querySelector(".openHam");


const show = () => {
    nav.style.display = "flex"
    nav.style.top = "0";
}

const hide = () => {
    nav.style.top = "-100%";
}


openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", hide);
