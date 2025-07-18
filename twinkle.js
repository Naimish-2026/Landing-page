document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll('svg circle');

  function twinkleStar(star) {
    let alpha = Math.random(); // Start opacity
    let delta = Math.random() * 0.02 + 0.005; // Same range as canvas
    let direction = 1;

    function animate() {
      alpha += direction * delta;
      if (alpha >= 1) {
        alpha = 1;
        direction = -1;
      } else if (alpha <= 0.2) {
        alpha = 0.2;
        direction = 1;
      }
      star.style.opacity = alpha.toFixed(2);
      requestAnimationFrame(animate);
    }

    animate();
  }

  circles.forEach(star => {
    star.style.opacity = 1;
    twinkleStar(star);
  });
});
