lucide.createIcons();

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.height = "70px";
    } else {
        navbar.style.height = "80px";
    }
});