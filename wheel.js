// ===== WHEEL.JS =====

const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const coinCount = document.getElementById("coinCount");
const profileCoins = document.getElementById("profileCoins");
const spinCountText = document.getElementById("spinCount");
const timer = document.getElementById("timer");

let rotation = 0;

// Har bir sovrin uchun sektor burchagi
const sector = {
    20: 25,
    30: 77,
    40: 128,
    50: 180,
    60: 231,
    70: 282,
    100: 334
};

function updateUI() {
    coinCount.innerText = coins;
    profileCoins.innerText = coins;
    spinCountText.innerText = spinCount;
}

updateUI();

spinBtn.onclick = () => {

    if (!canSpin()) {
        timer.innerText = "⏳ 24 soat kuting";
        return;
    }

    const reward = randomReward();

    coins += reward;
    spinCount++;
    lastSpin = Date.now();

    saveData();
    updateUI();

    rotation += 360 * 5 + (360 - sector[reward]);

    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        alert("🎉 Tabriklaymiz!\n\n+" + reward + " ochko oldingiz!");
    }, 5000);

};