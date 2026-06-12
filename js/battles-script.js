document.addEventListener("DOMContentLoaded", function() {

    // Control de los bloques de consejos para vencer
    const adviceBlocks = document.querySelectorAll(".pk-advice");

    adviceBlocks.forEach(block => {
        const button = block.querySelector(".pk-advice-button");
        const info = block.querySelector(".pk-advice-info");
        const icon = button.querySelector("img");

        button.addEventListener("click", () => {
            const isOpen = info.style.display === "flex";

            if (isOpen) {
                info.style.display = "none";
                icon.src = "../img/media/open_icon.png";
            } else {
                info.style.display = "flex";
                icon.src = "../img/media/close_icon.png";
            }
        });
    });

    // Añadir espacios vacíos en combates con 1 o 2 compis
    const teams = document.querySelectorAll(".sync-pairs-team");

    teams.forEach(team => {

        // Elementos del equipo
        const numSyncPairs = Array.from(team.children);

        // Caso: 1 compi
        if (numSyncPairs.length == 1) {

            const left = document.createElement("div");
            left.classList.add("empty-space");

            const right = document.createElement("div");
            right.classList.add("empty-space");

            team.prepend(left);
            team.append(right);
        }

        // Caso: 2 compis
        else if (numSyncPairs.length == 2) {

            const right = document.createElement("div");
            right.classList.add("empty-space");

            team.append(right);
        }

    });

    // Navegación con scroll lateral
    const slider = document.querySelector("nav ul");

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.style.cursor = "grabbing";
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.style.cursor = "grab";
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.style.cursor = "grab";
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();

        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5;
        slider.scrollLeft = scrollLeft - walk;
    });
});