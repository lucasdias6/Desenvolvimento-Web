// Luzes
const luzVermelha = document.getElementById('luz-vermelha');
const luzAmarela = document.getElementById('luz-amarela');
const luzVerde = document.getElementById('luz-verde');

// Botões
const bntVermelho = document.getElementById('btn-vermelho');
const btnAmarelo = document.getElementById('btn-amarelo');
const btnVerde = document.getElementById('btn-verde');



// lógica

bntVermelho.addEventListener('click', function() { 

    luzVermelha.style.backgroundColor = 'red'
    luzAmarela.style.backgroundColor = '#334155'
    luzVerde.style.backgroundColor = '#334155'
})

btnAmarelo.addEventListener('click', function() { 

    luzVermelha.style.backgroundColor = '#334155'
    luzAmarela.style.backgroundColor = 'yellow'
    luzVerde.style.backgroundColor = '#334155'
})

btnVerde.addEventListener('click', function() { 

    luzVermelha.style.backgroundColor = '#334155'
    luzAmarela.style.backgroundColor = '#334155'
    luzVerde.style.backgroundColor = 'green'
})
