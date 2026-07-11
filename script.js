// ===== SCRIPT.JS =====

// O'yin ishga tushganda
updateUI();
updateProfile();
updateRank();
updateLeaderboard();

// 24 soatlik taymer
function updateTimer() {

    if (canSpin()) {
        timer.innerText = "🎡 Tayyor!";
        spinBtn.disabled = false;
        return;
    }

    let left = SPIN_TIME - (Date.now() - lastSpin);

    let h = Math.floor(left / 3600000);
    let m = Math.floor((left % 3600000) / 60000);
    let s = Math.floor((left % 60000) / 1000);

    timer.innerText =
        "⏳ " +
        String(h).padStart(2, "0") + ":" +
        String(m).padStart(2, "0") + ":" +
        String(s).padStart(2, "0");

    spinBtn.disabled = true;
}

updateTimer();

setInterval(updateTimer, 1000);

// Ochkolar yangilanganda
function refreshAll() {
    updateUI();
    updateProfile();
    updateRank();
    updateLeaderboard();
}

// Tugmalar animatsiyasi
document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.style.transform = "scale(0.95)";

        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 120);

    });

});

console.log("🎁 Tekin UC DED yuklandi.");