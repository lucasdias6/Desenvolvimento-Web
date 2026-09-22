const dado = document.getElementById('dado-sensivel');
const alerta = document.getElementById('alerta-seguranca');

dado.addEventListener('copy', function(event){

    event.preventDefault()

    alerta.style.display = 'block'
    alerta.textContent = "⚠️ ALERTA: Tentativa de cópia bloqueada!"
});

dado.addEventListener('cut', function(event){

    event.preventDefault()

    alerta.style.display = 'block'
    alerta.textContent = "⚠️ ALERTA: Tentativa de corte bloqueada!"
});

dado.addEventListener('paste', function(event){

    event.preventDefault()
    
    alerta.style.display = 'block'
    alerta.textContent = "⚠️ ALERTA: Tentativa de cola bloqueada!"
});