const formulario = document.getElementById('form-cadastro');
const nome = document.getElementById('nome-cracha');
const setor = document.getElementById('setor-cracha');
const foto = document.getElementById('foto-cracha');

const nomeForm = document.getElementById('input-nome');
const setorForm = document.getElementById('input-setor');
const fotoForm = document.getElementById('input-foto');

formulario.addEventListener('submit', function(evento){

    evento.preventDefault();

 
    nome.textContent = nomeForm.value
    setor.textContent = setorForm.value
    foto.src = fotoForm.value

    nomeForm.value = ""
    fotoForm.value = ""

})
