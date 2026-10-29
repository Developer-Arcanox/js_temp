lucide.createIcons();

/* MOBILE NAVIGATION */

const hamburger =
document.querySelector(".hamburger");

const navMenu =
document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{

    navMenu.classList.toggle("active");
});

/* REVEAL ANIMATION */

const reveals =
document.querySelectorAll(".reveal");

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        } else {

            entry.target.classList.remove("active");
        }
    });

},{
    threshold:0.15
});

reveals.forEach((el)=>{

    observer.observe(el);
});

/* NAVBAR EFFECT */

window.addEventListener("scroll", ()=>{

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 40){

        navbar.style.background =
        "rgba(255,255,255,0.88)";

    } else {

        navbar.style.background =
        "rgba(255,255,255,0.7)";
    }
});

/* PARALLAX */

window.addEventListener("scroll", ()=>{

    const scrollY = window.scrollY;

    document.querySelectorAll(".bg-orb")
    .forEach((orb,index)=>{

        orb.style.transform =
        `translateY(${scrollY * (0.02 + index * 0.01)}px)`;
    });
});

/* FLOATING ANIMATION */

const floating =
document.querySelectorAll(".floating-card");

floating.forEach((el,index)=>{

    el.style.animation =
    `softFloat 6s ease-in-out infinite`;

    el.style.animationDelay =
    `${index * 0.5}s`;
});

/* DYNAMIC CSS */

const style =
document.createElement("style");

style.innerHTML = `

@keyframes softFloat{

    0%{
        transform:translateY(0px);
    }

    50%{
        transform:translateY(-10px);
    }

    100%{
        transform:translateY(0px);
    }
}
`;

document.head.appendChild(style);