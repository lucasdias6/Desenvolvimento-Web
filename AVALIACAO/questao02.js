const sensorTermico = {
    temperatura: 40,
    limiteCritico: 70,

    alterarTemperatura(valor){
        this.temperatura += valor

        if(this.temperatura >= this.limiteCritico){
            return "CRÍTICO"
        } else {
            return "ESTÁVEL"
        }
    }
};

const btnCarga = document.getElementById('btn-carga');
const btnVento = document.getElementById('btn-vento');
const valorTemp = document.getElementById('valor-temp');
const statusTxt = document.getElementById('status-txt');


function atualizarTela(resposta){
    valorTemp.textContent = sensorTermico.temperatura + "°C"
    statusTxt.textContent = resposta

        if(resposta == "CRÍTICO"){
        statusTxt.style.color = 'red'
        valorTemp.style.color = 'red'
        } else {
        statusTxt.style.color = '#10b981'
        valorTemp.style.color = '#10b981'
    }
};


btnCarga.addEventListener('click', function(){
    let resposta = sensorTermico.alterarTemperatura(15)
    atualizarTela(resposta)
});

btnVento.addEventListener('click', function(){
    let resposta = sensorTermico.alterarTemperatura(-15)
    atualizarTela(resposta)
});
