const countdownDate1 = new Date("August 11, 2025 00:00:00").getTime();
const countdownDate2 = new Date("February 4, 2025 00:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();

    const distance1 = countdownDate1 - now;
    const days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    const hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
    document.getElementById("days").innerText = days1;
    document.getElementById("hours").innerText = hours1;
    document.getElementById("minutes").innerText = minutes1;
    document.getElementById("seconds").innerText = seconds1;

    const distance2 = countdownDate2 - now;
    const days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    const hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    document.getElementById("days2").innerText = days2;
    document.getElementById("hours2").innerText = hours2;
    document.getElementById("minutes2").innerText = minutes2;
    document.getElementById("seconds2").innerText = seconds2;

    if (distance1 < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Tempo esgotado!";
    }

    if (distance2 < 0) {
        clearInterval(countdown);
        document.getElementById("countdown2").innerHTML = "Tempo esgotado!";
    }
}, 1000);
