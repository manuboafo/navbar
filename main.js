const hamburgerButton = document.getElementById("hamburger");
const navLinks = document.getElementsByClassName("nav-links")[0];

hamburgerButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");

});
