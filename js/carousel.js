const testimonials = document.querySelectorAll(".testimonial-card");

let current = 0;

setInterval(() => {

    testimonials[current].classList.remove("active");

    current = (current + 1) % testimonials.length;

    testimonials[current].classList.add("active");

}, 4000);