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


btnCarga.addEventListener('click', function(){
    sensorTermico.alterarTemperatura(15)
    valorTemp.textContent = sensorTermico.temperatura + "°C"

    if(resposta == "CRÍTICO"){
        statusTxt.textContent = resposta
        statusTxt.style.color = 'red'
    } else {
        statusTxt.textContent = resposta
        statusTxt.style.color = '#10b981'
    }
});

btnVento.addEventListener('click', function(){
    sensorTermico.alterarTemperatura(-15)
    valorTemp.textContent = sensorTermico.temperatura + "°C"

    if(resposta == "CRÍTICO"){
        statusTxt.textContent = resposta
        statusTxt.style.color = 'red'
    } else {
        statusTxt.textContent = resposta
        statusTxt.style.color = '#10b981'
    }
});
