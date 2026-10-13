const porta = {
    trancada: true,

    alternarTrava(){
        if (this.trancada === true){
            this.trancada = false
            painel.style.backgroundColor = 'green'
            cadeado.textContent = "🔓"
        } else {
            this.trancada = true
            painel.style.backgroundColor = 'red'
            cadeado.textContent = "🔒"
        }
    }
}

const btnTrava = document.getElementById('btn-trava');
const cadeado = document.getElementById('icone-cadeado');
const painel = document.querySelector('.painel');

btnTrava.addEventListener('click', function(){
    porta.alternarTrava()
})