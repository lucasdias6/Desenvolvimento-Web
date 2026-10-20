const radar = {
    velocidade: 40,
    limite: 60,
    
    alterarVelocidade(valor){
        this.velocidade += valor

        if (this.velocidade < 0){
            this.velocidade = 0
        }
        if (this.velocidade > this.limite){
            return "ACIMA DO LIMITE"
        } else {
            return "DENTRO DO LIMITE"
        }
    }
}

const valorVelocidade = document.getElementById('valor-vel')
const statusTxt = document.getElementById('status-txt')
const btnFrear = document.getElementById('btn-frear')
const btnAcelerar = document.getElementById('btn-acelerar')

function atualizarTela(resposta){
    valorVelocidade.textContent = radar.velocidade + " km/h"
    statusTxt.textContent = resposta

    if (resposta === "ACIMA DO LIMITE"){
        valorVelocidade.style.color = 'red'
        statusTxt.style.color = 'red'
    } else {
        valorVelocidade.style.color =  '#10b981'
        statusTxt.style.color = '#10b981'
    }
}

btnFrear.addEventListener('click', function(){
   let resposta = radar.alterarVelocidade(-10)
   atualizarTela(resposta)
})

btnAcelerar.addEventListener('click', function(){
    let resposta = radar.alterarVelocidade(10)
    atualizarTela(resposta)
})