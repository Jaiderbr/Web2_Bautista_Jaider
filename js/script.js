const btn = document.getElementById("menuBtn");
const btn2 = document.getElementById("menuId1");
const btn3 = document.getElementById("menuId2");
const btn4 = document.getElementById("menuId3");
const btn5 = document.getElementById("menuId4");
const btn6 = document.getElementById("menuId5");
const menu = document.getElementById("menu");

function esMovil() {
    return window.innerWidth <= 800;
}

btn.addEventListener("click", () => {
    if (esMovil()) {
        const estado = window.getComputedStyle(menu).display;
        menu.style.display = estado === "none" ? "block" : "none";
        btn.src = estado === "none" ? "img/Close.png" : "img/Menu.png";
    }
});

[btn2, btn3, btn4, btn5, btn6].forEach(link => {
    link.addEventListener("click", () => {
        if (esMovil()) {
            menu.style.display = "none";
            btn.src = "img/Menu.png";
        }
    });
});



