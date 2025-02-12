let btn_burger_open = document.getElementById("menu_burger_open");
let btn_burger_close = document.getElementById("menu_burger_close");
let bouton_burger = document.querySelectorAll(".bouton_burger");
let menu = document.getElementById("menu_burger");

menu.style.display = "none";
btn_burger_close.style.display = "block";
btn_burger_open.style.display = "none";
btn_burger_close.addEventListener("click", () => {
  menu.style.display = "flex";
  menu.style.maxHeight = "0";
  btn_burger_close.style.display = "none";
  btn_burger_open.style.display = "block";
  menu.style.transition = "max-height 1s ease";
  menu.style.overflow = "hidden";

  setTimeout(() => {
    menu.style.maxHeight = "1000px";
  }, 100);
});

btn_burger_open.addEventListener("click", () => {
  menu.style.display = "none";
  btn_burger_close.style.display = "block";
  btn_burger_open.style.display = "none";
});

let info = document.getElementById("info");
let info2 = document.getElementById("info2");

info2.style.display = "none";
info.addEventListener("click", () => {
  info2.style.display = "block";
  setTimeout(() => {
    info2.style.display = "none";
  }, 5000);
});
// enlever menu burger quand click sur lien
bouton_burger.forEach((bouton) => {
  bouton.addEventListener("click", () => {
    menu.style.display = "none";
    btn_burger_close.style.display = "block";
    btn_burger_open.style.display = "none";
  });
});
let main = document.getElementById("main");
main.addEventListener("click", () => {
  menu.style.display = "none";
  btn_burger_close.style.display = "block";
  btn_burger_open.style.display = "none";
});

/* JS*/
let js = document.getElementById("js");
let container = document.querySelector(".js_container");

container.addEventListener("mouseenter", () => {
  js.setAttribute("src", "img/js.gif");
});

container.addEventListener("mouseleave", () => {
  js.setAttribute("src", "img/js-transparent.png");
});
/* html */
let html = document.getElementById("html");
let containerhtml = document.querySelector(".html_container");

containerhtml.addEventListener("mouseenter", () => {
  html.setAttribute("src", "img/html.gif");
});

containerhtml.addEventListener("mouseleave", () => {
  html.setAttribute("src", "img/html-transparent.png");
});
/* css */

let css = document.getElementById("css");
let containercss = document.querySelector(".css_container");

containercss.addEventListener("mouseenter", () => {
  css.setAttribute("src", "img/css.gif");
});

containercss.addEventListener("mouseleave", () => {
  css.setAttribute("src", "img/css-transparent.png");
});

/* php */

let php = document.getElementById("php");
let containerphp = document.querySelector(".php_container");

containerphp.addEventListener("mouseenter", () => {
  php.setAttribute("src", "img/php.gif");
});

containerphp.addEventListener("mouseleave", () => {
  php.setAttribute("src", "img/php-transparent.png");
});

/* tailwind */

let tailwind = document.getElementById("tailwind");
let containertailwind = document.querySelector(".tailwind_container");

containertailwind.addEventListener("mouseenter", () => {
  tailwind.setAttribute("src", "img/tailwind.gif");
});

containertailwind.addEventListener("mouseleave", () => {
  tailwind.setAttribute("src", "img/tailwind-transparent.png");
});
/* git */

let git = document.getElementById("git");
let containergit = document.querySelector(".git_container");

containergit.addEventListener("mouseenter", () => {
  git.setAttribute("src", "img/git.gif");
});

containergit.addEventListener("mouseleave", () => {
  git.setAttribute("src", "img/git-transparent.png");
});

// Animation pour les barres de progression
document.addEventListener("DOMContentLoaded", () => {
  let progressBars = document.querySelectorAll(".progress");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let progress = entry.target;
          let width = progress.getAttribute("data-width");
          progress.style.width = width + "%";
          observer.unobserve(progress);
        }
      });
    },
    { threshold: 0.5 }
  );

  progressBars.forEach((progress) => {
    progress.style.width = "0%";
    observer.observe(progress);
  });
});

let savoir = document.getElementById("savoir");
let propos = document.getElementById("verspropos");
