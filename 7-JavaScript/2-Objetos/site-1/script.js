const cofre = {
    senha: "6767",
    tentativasErradas: 0,
    
    testarAcesso(senhaDigitada){
        if (senhaDigitada === this.senha) {
            return "Aberto!";
        } else {
            this.tentativasErradas++;
            return `Erros: ${this.tentativasErradas}`
        }
    }
}

const inputSenha = document.getElementById('input-senha');
const btn = document.getElementById('btn-abrir');
const mensagem = document.getElementById('visor');

btn.addEventListener('click', function(){
    let senhaDigitada = inputSenha.value;
    mensagem.textContent = cofre.testarAcesso(senhaDigitada);
})
