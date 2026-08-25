const btn = document.getElementById('btn-registrar');
const tela = document.getElementById('tela-terminal');

btn.addEventListener('click', function(){

    const novoItem = document.createElement('p');
    novoItem.textContent = "Acesso autorizado detectado."

    tela.appendChild(novoItem)

    novoItem.classList.add('linha-log') 
})