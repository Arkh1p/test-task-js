export function timer() {
    const timerWrapper = document.querySelector(".timer-digits");
    const timerDays = timerWrapper.querySelector(".timer-digits__days");
    const timerHours = timerWrapper.querySelector(".timer-digits__hours");
    const timerMinutes = timerWrapper.querySelector(".timer-digits__minutes");

    let leftDay;
    let leftSec;
    let ticker;

    function getSeconds() {
        let nowDate = new Date(); // Текущая дата
        let day = 0;
        let countertime = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 24, 0, 0); // Время до полуночи

        let currentTime = nowDate.getTime();
        let timeLeft = countertime.getTime();
        let diff = parseInt((timeLeft - currentTime) / 1000); // Разница между временем до ближайшей полночи и текущим временем

        if (diff > 0) {
            leftDay = day - nowDate.getDay();
        } else {
            leftDay = day - nowDate.getDay() - 1;
        }

        if (leftDay < 0) {
            leftDay += 7;
        }

        if (diff <= 0) {
            diff += 86400 * 7;
        }
        startTimer(diff);
    }

    function startTimer(secs) {
        leftSec = parseInt(secs);
        ticker = setInterval(() => tick(), 1000);
        tick();
    }

    function tick() {
        let secs = leftSec;
        if (secs > 0) {
            leftSec--;
        } else {
            clearInterval(ticker);
            getSeconds();
        }

        let days = Math.floor(secs / 86400);
        secs %= 86400;
        let hours = Math.floor(secs / 3600);
        secs %= 3600;
        let mins = Math.floor(secs / 60);
        secs %= 60;

        timerDays.querySelector(".timer-digits__days-counter").innerHTML = leftDay;
        timerHours.querySelector(".timer-digits__hours-counter").innerHTML = (hours < 10 ? "0" : "") + hours;
        timerMinutes.querySelector(".timer-digits__minutes-counter").innerHTML = (mins < 10 ? "0" : "") + mins;

        timerDays.querySelector(".timer-digits__days-text").innerHTML = declensionNum(days, ['день', 'дня', 'дней']);
        timerHours.querySelector(".timer-digits__hours-text").innerHTML = declensionNum(hours, ['час', 'часа', 'часов']);
        timerMinutes.querySelector(".timer-digits__minutes-text").innerHTML = declensionNum(mins, ['минута', 'минуты', 'минут']);
    }

    // Функция склонения числительных
    const declensionNum = (num, words) => {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
    };

    getSeconds();
}
