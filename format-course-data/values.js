
const startTimes = {
    "09:00": 1,
    "10:00": 2,
    "11:00": 3,
    "12:00": 4,
    "13:00": 5,
    "14:00": 6,
    "15:00": 7,
    "16:00": 8,
    "17:00": 9,
    "18:00": 10,
    "19:00": 11,
    "20:00": 12,
    "21:00": 13,
    "22:00": 14
}

const finishTimes = {
    "09:50": 1,
    "10:50": 2,
    "11:50": 3,
    "12:50": 4,
    "13:50": 5,
    "14:50": 6,
    "15:50": 7,
    "16:50": 8,
    "17:50": 9,
    "18:50": 10,
    "19:50": 11,
    "20:50": 12,
    "21:50": 13,
    "22:50": 14
}

const timesCount = Object.keys(startTimes).length;

const days = {
    "Pazartesi": timesCount * 0,
    "Salı": timesCount * 1,
    "Çarşamba": timesCount * 2,
    "Perşembe": timesCount * 3,
    "Cuma": timesCount * 4,
    "Cumartesi": timesCount * 5,
    "Pazar": timesCount * 6
}

module.exports = { days, startTimes, finishTimes };

