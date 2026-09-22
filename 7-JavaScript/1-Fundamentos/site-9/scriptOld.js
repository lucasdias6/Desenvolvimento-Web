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

    luzVermelha.classList.toggle('acesa-vermelha')
    luzAmarela.classList.remove('acesa-amarela')
    luzVerde.classList.remove('acesa-verde')
    
})

btnAmarelo.addEventListener('click', function() { 

    luzVermelha.classList.remove('acesa-vermelha')
    luzAmarela.classList.toggle('acesa-amarela')
    luzVerde.classList.remove('acesa-verde')

})

btnVerde.addEventListener('click', function() { 

    luzVermelha.classList.remove('acesa-vermelha')
    luzAmarela.classList.remove('acesa-amarela')
    luzVerde.classList.toggle('acesa-verde')

})