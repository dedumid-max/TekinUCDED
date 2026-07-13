// ===== DATA.JS =====

// Coin
let coins = Number(localStorage.getItem("coins")) || 0;

// Oxirgi aylantirish vaqti
let lastSpin = Number(localStorage.getItem("lastSpin")) || 0;

// 24 soat
const SPIN_TIME = 24 * 60 * 60 * 1000;

// Sovrinlar
const rewards = [
    20,
    30,
    40,
    50,
    60,
    70,
    100,
    200
];

// Ma'lumotni saqlash
function saveData() {
    localStorage.setItem("coins", coins);
    localStorage.setItem("lastSpin", lastSpin);
}

// Aylantirish mumkinmi?
function canSpin() {
    return Date.now() - lastSpin >= SPIN_TIME;
}