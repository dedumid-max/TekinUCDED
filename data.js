// ===== DATA.JS =====

// Ochkolar
let coins = Number(localStorage.getItem("coins")) || 589;

// Birinchi spin
let firstSpin = localStorage.getItem("firstSpin");
if (firstSpin === null) {
    firstSpin = true;
} else {
    firstSpin = false;
}

// Oxirgi spin vaqti
let lastSpin = Number(localStorage.getItem("lastSpin")) || 0;

// Jami spinlar
let spinCount = Number(localStorage.getItem("spinCount")) || 0;

// 24 soat (millisekund)
const SPIN_TIME = 24 * 60 * 60 * 1000;

// Ehtimollar
const rewards = [
    { value: 20, chance: 50 },
    { value: 30, chance: 40 },
    { value: 40, chance: 8 },
    { value: 50, chance: 1 },
    { value: 60, chance: 0.94 },
    { value: 70, chance: 0.05 },
    { value: 100, chance: 0.01 }
];

// Tasodifiy sovrin
function randomReward() {

    if (firstSpin) {
        firstSpin = false;
        localStorage.setItem("firstSpin", "done");
        return 100;
    }

    let r = Math.random() * 100;
    let total = 0;

    for (let item of rewards) {
        total += item.chance;

        if (r <= total) {
            return item.value;
        }
    }

    return 20;
}

// Saqlash
function saveData() {
    localStorage.setItem("coins", coins);
    localStorage.setItem("lastSpin", lastSpin);
    localStorage.setItem("spinCount", spinCount);
}

// 24 soat tekshirish
function canSpin() {
    return Date.now() - lastSpin >= SPIN_TIME;
}