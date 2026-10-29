const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const particles = [];

for(let i=0;i<80;i++){

    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3,
        dx: Math.random() - 0.5,
        dy: Math.random() - 0.5
    });
}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p => {

        p.x += p.dx;
        p.y += p.dy;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

        ctx.fillStyle = "#ccff00";
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();