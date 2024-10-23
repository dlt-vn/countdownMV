// Data final para o countdown (13 de agosto de 2025, meia-noite)
const countdownDate = new Date("August 11, 2025 00:00:00").getTime();

// Função que atualiza o countdown a cada segundo
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Cálculos para dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibir o resultado
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Se o countdown terminar, exibir mensagem
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Tempo esgotado!";
    }
}, 1000);
