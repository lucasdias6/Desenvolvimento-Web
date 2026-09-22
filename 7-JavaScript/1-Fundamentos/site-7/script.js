const usuario = document.getElementById('usuario');
const mensagem = document.getElementById('mensagem');
const botao = document.getElementById('btn');


botao.addEventListener('click', function (){
    
    let nome = usuario.value;
    mensagem.textContent = "Seja bem vindo " + nome + "!"

    usuario.value = "";
})