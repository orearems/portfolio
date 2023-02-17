const menus = document.querySelector(".menu");
const navlist = document.querySelector(".navlist");



menus.addEventListener("click", function() {
    navlist.classList.toggle("click");
    navlist.classList.toggle("open");
});