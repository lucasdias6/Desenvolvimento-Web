const caminhao = {
    motorista: "Roberto",
    cargaRestante: 100,
    limiteRetorno: 20
};

console.log(caminhao.motorista)

for (let i = 1; i <= 4; i++ ){
    caixasEntregues = 10 * i
    caminhao.cargaRestante -= caixasEntregues
    
    if(caminhao.cargaRestante <= caminhao.limiteRetorno){
        // Coloquei a mensagem para que o programa mostre a parada e a carga restante mesmo com o alerta
        console.log("Parada " + i)
        console.log("Caixas restantes: " + caminhao.cargaRestante)
        console.log("ALERTA: Retorne ao CD para reabastecer")
        break
    } else {
        console.log("Parada " + i)
        console.log("Caixas restantes: " + caminhao.cargaRestante)
    }
};
