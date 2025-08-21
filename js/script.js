const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    const estado = menu.style.display;
    menu.style.display = estado === "none" ? "block" : "none";

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
