gsap.registerPlugin(ScrollTrigger);

gsap.to(".planet", {
  opacity: 1,
  scale: 5,
  y: "+=900",
  scrollTrigger: {
    trigger: ".planet",
    start: "top center",
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
gsap.to(".text1", {
  y: 300,
  scale: 5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".planet",
    start: "top center",
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
  start: "center center", // Fixation commence en haut de l'écran
  end: "+=1000px", // Reste fixé pendant 500 pixels
  pin: true, // Fixe l'élément
  scrub: true,
});

ScrollTrigger.create({
  trigger: ".fusee",
  start: "center center", // Fixation commence en haut de l'écran
  end: "+=2000px", // Reste fixé pendant 500 pixels
  pin: true, // Fixe l'élément
  scrub: true,
});

gsap.to(".fusee", {
  opacity: 1,
  x: 500,
  rotation: 90,
  scrollTrigger: {
    trigger: ".fusee",
    start: "center center",
    scrub: true,
  },
});

gsap.to(".horizontal", {
  xPercent: -60,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal",
    start: "bottom bottom",
    end: "100%",
    scrub: true,
    pin: true,
  },
});

ScrollTrigger.create({
  trigger: ".competence",
  start: "center center", // Fixation commence en haut de l'écran
  end: "+=2000px", // Reste fixé pendant 500 pixels
  pin: true, // Fixe l'élément
  scrub: true,
});
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".competence",
    start: "center center",
    scrub: true,
  },
});

// Première animation
tl.to(".text-competence1", {
  y: -150,
  scale: 0.8,
  x: 1000,
});

// Deuxième animation qui suit directement
tl.to(".text-competence1", {
  y: 0,
  scale: 1,
  x: 2000,
});
tl.to(".text-competence2", {
  y: -150,
  scale: 0.8,
  x: 1000,
});

// Deuxième animation qui suit directement
tl.to(".text-competence2", {
  y: 0,
  scale: 1,
  x: 2000,
});

tl.to(".text-competence3", {
  y: -150,
  scale: 0.8,
  x: 1000,
});

// Deuxième animation qui suit directement
tl.to(".text-competence3", {
  y: 0,
  scale: 1,
  x: 2000,
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
