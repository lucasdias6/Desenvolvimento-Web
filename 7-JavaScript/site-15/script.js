const caixaArquivo = document.getElementById('caixa-arquivo');
const icone = document.getElementById('icone');
const mensagem = document.getElementById('nome-arquivo');

caixaArquivo.addEventListener('click', function(){

    caixaArquivo.style.borderColor = '#006aff'

});

caixaArquivo.addEventListener('dblclick', function(){

    caixaArquivo.style.backgroundColor = '#0ea800'
    caixaArquivo.style.borderColor = 'green'

    icone.textContent = "🔓"
    mensagem.textContent = "Acesso Liberado!"

});