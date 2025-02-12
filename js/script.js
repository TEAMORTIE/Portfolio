gsap.registerPlugin(ScrollTrigger);

gsap.to(".image-planete", {
  opacity: 1,
  scale: 10,
  y: "+=700",
  scrollTrigger: {
    trigger: ".container",
    start: "center center",
    scrub: true,
  },
});

gsap.to(".satellite", {
  rotation: 180,
  scrollTrigger: {
    trigger: ".satellite",
    start: "top bottom",
    scrub: true,
  },
});

gsap.to(".dev", {
  opacity: 1,
  y: 400,
  scale: 2,
  scrollTrigger: {
    trigger: ".dev",
    start: "center center",
    scrub: true,
  },
});
gsap.to(".dev2", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".dev",
    start: "center center",
    scrub: true,
  },
});
ScrollTrigger.create({
  trigger: ".container",
  start: "center center",
  end: "+=1200px",
  pin: true,
  scrub: true,
});

ScrollTrigger.create({
  trigger: ".fusee",
  start: "center center",
  end: "+=3000px",
  pin: true,
  scrub: true,
});

gsap.to(".fusee", {
  opacity: 1,
  y: -200,
  x: 550,
  rotation: 90,
  scrollTrigger: {
    trigger: ".fusee",
    start: "center center",
    scrub: true,
  },
});
gsap.to(".trait", {
  opacity: 1,
  scale: 1,
  scrollTrigger: {
    trigger: ".trait_container",
    start: "center top",
    scrub: true,
  },
});

gsap.to(".etoile_filante", {
  opacity: 1,
  scale: 1,
  scrollTrigger: {
    trigger: ".trait_container",
    start: "center top",
    scrub: true,
  },
});

const points = document.querySelectorAll(".point");

function isTooClose(x, y, points) {
  // Vérifie si la position (x, y) est trop proche de l'un des points existants
  for (let i = 0; i < points.length; i++) {
    let point = points[i];
    let pointX = parseFloat(point.style.left);
    let pointY = parseFloat(point.style.marginTop);
    let distance = Math.sqrt(Math.pow(x - pointX, 2) + Math.pow(y - pointY, 2));
    if (distance < 15) {
      // 50px de distance minimum
      return true;
    }
  }
  return false;
}

points.forEach((point) => {
  let randomX, randomY;

  // Boucle jusqu'à ce qu'une position valide soit trouvée
  do {
    randomX = Math.random() * 75 + 5;
    randomY = Math.random() * 30 + -20;
  } while (isTooClose(randomX, randomY, points));

  gsap.set(point, {
    position: "absolute",
    marginTop: `${randomY}%`,
    left: `${randomX}%`,
    opacity: 0,
  });

  gsap.to(point, {
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    delay: Math.random() * 0.5,
  });
});

const points2 = document.querySelectorAll(".point2");

points2.forEach((point2) => {
  let randomX = Math.random() * 80 + 10;
  let randomY = Math.random() * -50 + 20;

  gsap.set(point2, {
    position: "absolute",
    marginTop: `${randomY}%`,
    left: `${randomX}%`,
    opacity: 0,
  });

  gsap.to(point2, {
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    delay: Math.random() * 0.5,
  });
});

const text = document.querySelector(".text");

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});
const pointss = document.getElementsByClassName("point");

Array.from(pointss).forEach(function (point) {
  point.addEventListener("click", function () {
    // Récupère les dimensions actuelles de l'élément
    const currentWidth = this.offsetWidth;
    const currentHeight = this.offsetHeight;
    const pointId = this.getAttribute("data-id");

    // Augmente la taille de 500px
    this.style.width = currentWidth + 500 + "vh";
    this.style.height = currentHeight + 500 + "vh";
    this.style.zIndex = 999; // Correct `z-index`

    // Applique une transition pour l'agrandissement
    this.style.transition = "width 1s ease, height 1s ease";

    setTimeout(() => {
      // Retourne à la taille initiale avant la redirection
      this.style.width = currentWidth + 5 + "vh";
      this.style.height = currentHeight + 5 + "vh";

      // Redirection vers la page compétente après 1 seconde
      window.location.href = `../pages/competence.php?id=${pointId}`;

      // Réinitialisation de la taille à 15px (optionnel, si nécessaire)
      this.style.width = 15 + "px";
      this.style.height = 15 + "px";
    }, 1000); // Délai avant réinitialisation et redirection
  });
});

let toggle = false;
let fleche = document.querySelectorAll(".prochain");
fleche.forEach((f) => {
  f.addEventListener("click", () => {
    if (!toggle) {
      gsap.to(".projet1", {
        opacity: 0,
        duration: 0.5,

        onComplete: () => {
          document
            .querySelectorAll(".projet1")
            .forEach((el) => (el.style.display = "none"));
          document.querySelectorAll(".projet2").forEach((el) => {
            el.style.display = "block";
            gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.2 });
          });
        },
      });
    } else {
      gsap.to(".projet2", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          document
            .querySelectorAll(".projet2")
            .forEach((el) => (el.style.display = "none"));
          document.querySelectorAll(".projet1").forEach((el) => {
            el.style.display = "block";
            gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.2 });
          });
        },
      });
    }

    toggle = !toggle;
  });
});
let projets = document.querySelectorAll(".pr");

projets.forEach((projet) => {
  projet.addEventListener("mouseenter", () => choisir(projet));
  projet.addEventListener("mouseleave", () => enlever(projet));
});

function choisir(projet) {
  let choix = document.createElement("div");

  /* manque plus qu'a plasser le text */
  choix.classList.add("choix");
  choix.style.position = "absolute";
  choix.style.width = "50px";
  choix.style.height = "2px";
  choix.style.left = "37%"; // Correction de la syntaxe
  choix.style.backgroundColor = "white";
  choix.style.transform = "rotate(-45deg)";

  projet.appendChild(choix);
}

function enlever(projet) {
  let choix = projet.querySelector(".choix");
  if (choix) {
    choix.remove();
  }
}

/* scroll planet */
let planet = document.querySelector(".image-planete");
planet.addEventListener("click", () => {
  scroll(0, 1800);
});

let etoiles = document.querySelectorAll(".point");

etoiles.forEach((etoile) => {
  etoile.addEventListener("mouseenter", () => choisir1(etoile));
  etoile.addEventListener("mouseleave", () => enlever1(etoile));
});

function choisir1(etoile) {
  let choix1 = document.createElement("div");
  let choix2 = document.createElement("div");
  choix1.classList.add("choix1");
  choix1.style.position = "absolute";
  choix1.style.width = "25px";
  choix1.style.height = "1px";
  choix1.style.left = "-15%";
  choix1.style.backgroundColor = "white";
  choix1.style.transform = "rotate(-45deg)";

  choix2.classList.add("choix2");
  choix2.style.position = "absolute";
  choix2.style.width = "25px";
  choix2.style.height = "1px";
  choix2.style.left = "35%";
  choix2.style.backgroundColor = "white";
  choix2.style.transform = "rotate(135deg)";

  etoile.appendChild(choix2);
  etoile.appendChild(choix1);
}

function enlever1(etoile) {
  let choix1 = etoile.querySelector(".choix1");
  if (choix1) {
    choix1.remove();
  }
  let choix2 = etoile.querySelector(".choix2");
  if (choix2) {
    choix2.remove();
  }
}
savoir.addEventListener("click", () => {
  scroll(0, 2500);
});
verspropos.addEventListener("click", () => {
  scroll(0, 2500);
});
