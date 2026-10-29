const hiddenElements = document.querySelectorAll(
    ".blog-card, .featured-card, .bento-card"
);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.1
});

hiddenElements.forEach(el => {

    el.classList.add("hidden");
    revealObserver.observe(el);

});