const visor = document.getElementById('visor');
const btnLiberar = document.getElementById('btn-liberar');
const btnBloquear = document.getElementById('btn-bloquear');

visor.addEventListener('mouseenter', function(){

    visor.textContent = "Aguardando Senha..."
    visor.style.backgroundColor = 'orange'

});

visor.addEventListener('mouseleave', function(){

    visor.textContent = "Sistemam Ativo"
    visor.style.backgroundColor = 'gray'

});

btnLiberar.addEventListener('click', function(){

    visor.textContent = "Acesso Liberado"
    visor.style.backgroundColor = '#22c55e'

});

btnBloquear.addEventListener('click', function(){

    visor.textContent = "Acesso Bloqueado"
    visor.style.backgroundColor = '#dc2626'

});
