// ===== WHEEL.JS =====

const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const timer = document.getElementById("timer");
const coinText = document.getElementById("coin");

let currentRotation = 0;

spinBtn.onclick = () => {

    if (!canSpin()) return;

    spinBtn.disabled = true;

    const index = Math.floor(Math.random() * rewards.length);
    const reward = rewards[index];

    const sector = 360 / rewards.length;

    currentRotation += 360 * 6 + (360 - (index * sector + sector / 2));

    wheel.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {

        coins += reward;
        lastSpin = Date.now();

        saveData();

        coinText.innerText = coins;

        alert("🎉 Siz " + reward + " Coin yutdingiz!");

        updateTimer();

    }, 6000);

};