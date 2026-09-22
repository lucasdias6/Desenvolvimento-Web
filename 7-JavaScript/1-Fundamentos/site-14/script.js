const nave = document.getElementById('nave');

let posicaoX = 180
let posicaoY = 180

document.addEventListener('keydown', function(event) {
    if (event.key == "ArrowUp") {
        posicaoY -= 20
    } else if (event.key == "ArrowDown"){
        posicaoY += 20
    } else if (event.key == "ArrowLeft"){
        posicaoX -= 20
    } else if (event.key == "ArrowRight"){
        posicaoX += 20
    }
    nave.style.top = posicaoY + 'px';
    nave.style.left = posicaoX + 'px';
})