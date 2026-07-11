// ===== MISSIONS.JS =====

const subMission = document.getElementById("subMission");
const dailyMission = document.getElementById("dailyMission");

// Kanal missiyasi
let subDone = localStorage.getItem("subMission") === "done";

if (subDone) {
    subMission.innerText = "✅ Bajarildi";
    subMission.disabled = true;
}

subMission.onclick = () => {

    if (subDone) return;

    coins += 100;

    saveData();

    coinCount.innerText = coins;
    profileCoins.innerText = coins;

    subDone = true;

    localStorage.setItem("subMission", "done");

    subMission.innerText = "✅ Bajarildi";
    subMission.disabled = true;

    alert("🎉 Kanal missiyasi bajarildi!\n+100 ochko");
};


// ===== Kunlik bonus =====

let lastDaily = Number(localStorage.getItem("dailyBonus")) || 0;

dailyMission.onclick = () => {

    const now = Date.now();

    if (now - lastDaily < 86400000) {

        alert("⏳ Kunlik bonusni ertaga olishingiz mumkin.");

        return;

    }

    coins += 50;

    lastDaily = now;

    localStorage.setItem("dailyBonus", lastDaily);

    saveData();

    coinCount.innerText = coins;
    profileCoins.innerText = coins;

    alert("🎁 Kunlik bonus!\n+50 ochko");
};


// ===== Reyting =====

const leaderboard = document.getElementById("leaderboard");

function updateLeaderboard(){

leaderboard.innerHTML = `
<li>🥇 Sen — ${coins} 🪙</li>
<li>🥈 Mehmon — 420 🪙</li>
<li>🥉 Mehmon2 — 300 🪙</li>
`;

}

updateLeaderboard();