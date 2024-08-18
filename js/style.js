document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const carousel = document.getElementById("carouselExampleCaptions");

    window.onscroll = function() {
        const scrollPosition = window.scrollY;
        const carouselHeight = carousel.offsetHeight;

        if (scrollPosition > carouselHeight) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    };
});

