document.addEventListener("DOMContentLoaded", function() {
    const battles = document.querySelectorAll(".battle");
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    // Ejecutar al cargar
    resetBattles();

    // Escuchar cambios de tamaño (breakpoint)
    mediaQuery.addEventListener("change", resetBattles);

    // Eventos de los botones Pistas y Sumario
    function resetBattles() {
        battles.forEach(battle => {

            const tipsBtn = battle.querySelector(".battle-tips");
            const checkBtn = battle.querySelector(".battle-check");

            const tipsInfo = battle.querySelector(".battle-tips-info");
            const recap = battle.querySelector(".battle-recap");

            // Resetear clases
            tipsBtn.classList.remove("active");
            checkBtn.classList.remove("active");

            if (mediaQuery.matches) {
                tipsInfo.style.display = "flex";
                recap.style.display = "flex";
            } else {
                tipsInfo.style.display = "none";
                recap.style.display = "none";
            }
        });
    }
    
    battles.forEach(battle => {

        const tipsBtn = battle.querySelector(".battle-tips");
        const checkBtn = battle.querySelector(".battle-check");

        const tipsInfo = battle.querySelector(".battle-tips-info");
        const recap = battle.querySelector(".battle-recap");

        tipsBtn.addEventListener("click", () => {

            if (mediaQuery.matches) return; // No hacer nada en escritorio

            const isActive = tipsBtn.classList.contains("active");

            tipsInfo.style.display = "none";
            recap.style.display = "none";
            tipsBtn.classList.remove("active");
            checkBtn.classList.remove("active");

            if (!isActive) {
                tipsInfo.style.display = "block";
                tipsBtn.classList.add("active");
            }
        });

        checkBtn.addEventListener("click", () => {

            if (mediaQuery.matches) return;

            const isActive = checkBtn.classList.contains("active");

            tipsInfo.style.display = "none";
            recap.style.display = "none";
            tipsBtn.classList.remove("active");
            checkBtn.classList.remove("active");

            if (!isActive) {
                recap.style.display = "flex";
                checkBtn.classList.add("active");
            }
        });

    });

});