// Função para atualizar o contador
function updateCountdown() {
    // Data do evento final (ano, mês (0-11), dia, hora, minuto, segundo)
    const eventDate = new Date('2024-05-15T07:00:00');

    // Data atual
    const now = new Date();

    // Calcula a diferença em milissegundos
    const diff = eventDate - now;

    // Calcula o tempo restante em dias, horas, minutos e segundos
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Atualiza os valores nos elementos HTML
    document.getElementById('days').textContent = formatTime(days);
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
}

// Adiciona um zero à esquerda se o número for menor que 10
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Atualiza o contador a cada segundo
setInterval(updateCountdown, 1000);

// Inicializa o contador quando a página carrega
updateCountdown();