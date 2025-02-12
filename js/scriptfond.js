document.addEventListener("DOMContentLoaded", function () {
  const numPoints = 100; // Nombre de points à générer
  const body = document.body;

  function createPoints(className) {
    for (let i = 0; i < numPoints; i++) {
      const point = document.createElement("div");
      point.classList.add(className);

      // Position aléatoire
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * document.documentElement.scrollHeight;

      point.style.position = "absolute";
      point.style.left = `${x}px`;
      point.style.top = `${y}px`;
      point.style.zIndex = 0;

      body.appendChild(point);
    }
  }

  createPoints("fond1");
  createPoints("fond2");
  createPoints("fond3");
  createPoints("fond4");
  createPoints("fond5");
  createPoints("fond6");
  createPoints("fond7");
});
