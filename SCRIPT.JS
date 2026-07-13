// ===== SCRIPT.JS =====

const claimBtn = document.getElementById("claimBtn");

// Coinni chiqarish
function updateUI() {
    coinText.innerText = coins;
}

// Taymer
function updateTimer() {

    if (canSpin()) {
        timer.innerText = "🎡 Tayyor";
        spinBtn.disabled = false;
        return;
    }

    let left = SPIN_TIME - (Date.now() - lastSpin);

    let h = Math.floor(left / 3600000);
    let m = Math.floor((left % 3600000) / 60000);
    let s = Math.floor((left % 60000) / 1000);

    timer.innerText =
        String(h).padStart(2, "0") + ":" +
        String(m).padStart(2, "0") + ":" +
        String(s).padStart(2, "0");

    spinBtn.disabled = true;
}

// UC olish
claimBtn.onclick = () => {

    if (coins < 589) {
        alert("❌ Sizda 589 Coin yo'q!");
        return;
    }

    coins -= 589;
    saveData();
    updateUI();

    alert("🎉 Tabriklaymiz!\n60 UC olish so'rovi yuborildi.");
};

// Boshlanish
updateUI();
updateTimer();

setInterval(updateTimer, 1000);