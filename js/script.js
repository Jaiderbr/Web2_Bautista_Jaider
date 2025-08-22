const btn = document.getElementById("menuBtn");
const btn2 = document.getElementById("menuId1");
const btn3 = document.getElementById("menuId2");
const btn4 = document.getElementById("menuId3");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    const estado = window.getComputedStyle(menu).display;
    menu.style.display = estado === "none" ? "block" : "none";
    btn.src = estado === "none" ? "img/Close.png" : "img/Menu.png";
});

btn2.addEventListener("click", () => {
    const estado = window.getComputedStyle(menu).display;
    menu.style.display = "none";
    btn.src = estado === "none" ? "img/Close.png" : "img/Menu.png";
});

btn3.addEventListener("click", () => {
    const estado = window.getComputedStyle(menu).display;
    menu.style.display = "none";
    btn.src = estado === "none" ? "img/Close.png" : "img/Menu.png";
});

btn4.addEventListener("click", () => {
    const estado = window.getComputedStyle(menu).display;
    menu.style.display = "none";
    btn.src = estado === "none" ? "img/Close.png" : "img/Menu.png";
});


particlesJS("particles-js", {
    "particles": {
        "number": { "value": 100 },
        "shape": { "type": "circle" },
        "size": { "value": 6, "random": true },
        "move": { "enable": true, "speed": 3 },
        "opacity": { "value": 0.5 }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": true, "mode": "repulse" }
        }
    }
});
