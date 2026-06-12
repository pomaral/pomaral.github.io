document.addEventListener("DOMContentLoaded", function() {
    const battles = document.querySelectorAll(".battle");
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    // Ejecutar al cargar
    resetBattles();

    // Escuchar cambios de tamaño (breakpoint)
    mediaQuery.addEventListener("change", resetBattles);

    // Contar combates
    const victoryStreak = battles.length;

    document.getElementById("victory-streak").textContent = victoryStreak;

    // Contar compis usados
    const syncPairs = document.querySelectorAll("#battle-list .sync-pairs-team a");
    const eggmon = document.querySelectorAll('#battle-list .sync-pairs-team .eggmon')
    const totalSyncPairs = syncPairs.length + eggmon.length;

    document.getElementById("sync-pairs-used").textContent = totalSyncPairs;

    // Eventos de los botones Pistas y Verificar
    function resetBattles() {
        battles.forEach(battle => {

            const tipsBtn = battle.querySelector(".battle-tips");
            const checkBtn = battle.querySelector(".battle-check");

            const tipsInfo = battle.querySelector(".battle-tips-info");
            const proof = battle.querySelector(".battle-proof");

            // Resetear clases
            tipsBtn.classList.remove("active");
            checkBtn.classList.remove("active");

            if (mediaQuery.matches) {
                tipsInfo.style.display = "flex";
                proof.style.display = "flex";
            } else {
                tipsInfo.style.display = "none";
                proof.style.display = "none";
            }
        });
    }
    
    battles.forEach(battle => {

        const tipsBtn = battle.querySelector(".battle-tips");
        const checkBtn = battle.querySelector(".battle-check");

        const tipsInfo = battle.querySelector(".battle-tips-info");
        const proof = battle.querySelector(".battle-proof");

        tipsBtn.addEventListener("click", () => {

            if (mediaQuery.matches) return; // No hacer nada en escritorio

            const isActive = tipsBtn.classList.contains("active");

            tipsInfo.style.display = "none";
            proof.style.display = "none";
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
            proof.style.display = "none";
            tipsBtn.classList.remove("active");
            checkBtn.classList.remove("active");

            if (!isActive) {
                proof.style.display = "flex";
                checkBtn.classList.add("active");
            }
        });

    });

});