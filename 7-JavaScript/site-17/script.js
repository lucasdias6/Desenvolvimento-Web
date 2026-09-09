const mensagem = document.getElementById('mensagem');
const corpo = document.body

function dispararAlarme(){
    corpo.style.backgroundColor = '#ce0808'
    mensagem.textContent = "TENTATIVA DE FUGA DETECTADA"
};

function normalizarSistema(){
    corpo.style.backgroundColor = "#0f172a"
    mensagem.textContent = "Monitorando atividade..."
}

document.addEventListener('mouseleave', dispararAlarme)

document.addEventListener('mouseenter', normalizarSistema)

window.addEventListener('blur', dispararAlarme)

window.addEventListener('focus', normalizarSistema)
