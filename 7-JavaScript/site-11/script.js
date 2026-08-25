const tarefa = document.getElementById('input-tarefa');
const btn = document.getElementById('btn-adicionar');
const lista = document.getElementById('lista-tarefas');

btn.addEventListener('click', function(){
    
    if (tarefa.value != "") {
        const novoItem = document.createElement('li');
        novoItem.textContent = tarefa.value

        lista.appendChild(novoItem);

        tarefa.value = "";
        tarefa.focus();
    }
})