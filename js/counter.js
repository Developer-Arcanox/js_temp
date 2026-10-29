const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const update = () => {

                count += target / 100;

                if(count < target){
                    counter.innerText = Math.ceil(count);
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target + "+";
                }
            };

            update();
        }
    });

}, {
    threshold: 0.5
});

counters.forEach(counter => observer.observe(counter));