$(document).ready(function () {
    // Array de URLs das imagens
    const images = [
        '../images/home/bg1.webp',
        '../images/home/bg2.webp',
        '../images/home/bg3.webp',
        '../images/home/bg4.webp',
        '../images/home/bg5.webp',
    ];

    let currentIndex = 0; // Índice da imagem atual

    // Função para trocar a imagem com efeito de fade
    function changeBackground() {
        $('.s-home .home-image-part').fadeOut(1000, function () {
            // Atualiza a imagem de fundo
            $(this)
                .css('background-image', `url(${images[currentIndex]})`)
                .fadeIn(1000);
        });

        // Atualiza o índice para a próxima imagem
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Trocar a imagem a cada 5 segundos (5000ms)
    setInterval(changeBackground, 5000);
});

particlesJS('particles-js', {
    particles: {
        number: { value: 50 },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: { enable: true, speed: 2 },
    },
});
