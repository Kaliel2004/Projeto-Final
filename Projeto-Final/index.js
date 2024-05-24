// Define os sons dos botões
const buttonSounds = {
    a: './assets/sounds/crash.mp3',
    s: './assets/sounds/tom1.mp3',
    d: './assets/sounds/snare.mp3',
    j: './assets/sounds/tom3.mp3',
    k: './assets/sounds/tom2.mp3',
    l: './assets/sounds/kickbass.mp3',
};

// Função para tocar o som com base na tecla pressionada
function playSound(key) {
    const soundFile = buttonSounds[key];
    if (soundFile) {
        const audio = new Audio(soundFile);
        audio.play();
    }
}

// Adicione um evento de escuta para detectar as teclas pressionadas
document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    playSound(key);
});

// Adicione um evento de escuta para os botões de bateria
document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', () => {
        const key = button.textContent.toLowerCase();
        playSound(key);
    });
});

