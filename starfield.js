const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];
let w = window.innerWidth;
let h = window.innerHeight;
canvas.width = w;
canvas.height = h;

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * .75 + 0.5,
      alpha: Math.random(),
      delta: Math.random() * 0.02 + 0.005
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, w, h);
  for (let star of stars) {
    star.alpha += star.delta;
    if (star.alpha <= 0 || star.alpha >= 1) {
      star.delta = -star.delta;
    }
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
  }
  requestAnimationFrame(drawStars);
}

createStars(250);
drawStars();

window.addEventListener('resize', () => {
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
  createStars(250);
});
