const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');
        
    }, 600);
    
};

const loop = setInterval(() => {
    
    const pipePosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 240) {
        
        cano.style.animation = 'none';
        cano.style.left = '${pipePosition}px';

        mario.src="../Imagens/game-over.png";
        mario.style.width = '180px'
        mario.style.bottom = '35%';
        mario.style.left = '50%';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('click', jump);

