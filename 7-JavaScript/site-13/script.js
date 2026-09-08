const formulario = document.getElementById('form-cadastro');
const nome = document.getElementById('nome-cracha');
const setor = document.getElementById('setor-cracha');

formulario.addEventListener('submit', function(evento){

    evento.preventDefault();
    const nomeForm = document.getElementById('input-nome').value;
    const setorForm = document.getElementById('input-setor').value;

    nome.textContent = nomeForm
    setor.textContent = setorForm

})
