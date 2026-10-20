const barragem = {
    nome: "Barragem Oeste",
    nivelAtual: 40,
    nivelAlerta: 80
}

// menu de início

console.log("======================")
console.log(barragem.nome)
console.log("Nivel atual: " + barragem.nivelAtual)
console.log("======================")

for (let i = 1; i <= 5; i++){
    barragem.nivelAtual += 5 * i

    if (barragem.nivelAtual >= barragem.nivelAlerta){
        console.log("Hora: " + i)
        console.log("Nivel atual: " + barragem.nivelAtual)
        console.log(`ALERTA: nível da barragem em ${barragem.nivelAtual}%. Acione a Defesa Civil`)
        break
    } else {
        console.log("Hora: " + i)
        console.log("Nivel atual: " + barragem.nivelAtual)
    }
}