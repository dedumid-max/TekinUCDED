// ===== PROFILE.JS =====

// Foydalanuvchi ID
let playerId = localStorage.getItem("playerId");

if (!playerId) {
    playerId = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("playerId", playerId);
}

// Ro'yxatdan o'tgan sana
let joinDate = localStorage.getItem("joinDate");

if (!joinDate) {
    joinDate = new Date().toLocaleDateString("uz-UZ");
    localStorage.setItem("joinDate", joinDate);
}

// HTML elementlari
const playerIdText = document.getElementById("playerId");

// Profilni yangilash
function updateProfile() {

    playerIdText.innerText = playerId;

    profileCoins.innerText = coins;

    spinCountText.innerText = spinCount;

}

// Daraja
function getRank() {

    if (coins >= 5000) return "💎 Diamond";

    if (coins >= 3000) return "🥇 Oltin";

    if (coins >= 1500) return "🥈 Kumush";

    return "🥉 Bronza";

}

// Darajani chiqarish
const rank = document.createElement("p");

rank.id = "rank";

document.querySelector(".profile").appendChild(rank);

function updateRank(){

rank.innerHTML = "⭐ Daraja: <b>" + getRank() + "</b>";

}

updateProfile();

updateRank();