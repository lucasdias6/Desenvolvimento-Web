const contador = document.getElementById("contador");
const botao = document.getElementById("btn");

let controle = 0

botao.addEventListener('click', function() {
    
    controle = controle + 67
    
    contador.innerHTML = controle

});