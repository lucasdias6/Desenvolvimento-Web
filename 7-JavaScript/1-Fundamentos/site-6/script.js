const titulo = document.getElementById("titulo");
const lampada = document.getElementById("imagem");
const liga = document.getElementById("liga");
const desliga = document.getElementById("desliga");

liga.addEventListener('click', function () {
    imagem.src = "./img/acesa.png";
    document.getElementsByTagName('body')[0].style.backgroundColor = "white";
    titulo.style.color = "black"
    
})

desliga.addEventListener('click', function(){
    imagem.src = "./img/apagada.png";
    document.getElementsByTagName('body')[0].style.backgroundColor = "black";
    titulo.style.color = "white"
})



