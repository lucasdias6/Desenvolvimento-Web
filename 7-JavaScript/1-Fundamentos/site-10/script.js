const btnCarinho = document.getElementById('btn-carinho');
const btnBronca = document.getElementById('btn-bronca');
const btnDormir = document.getElementById('btn-dormir');
const rostoRobo = document.getElementById('rosto-robo');

btnCarinho.addEventListener('click', function() {

    rostoRobo.textContent = "( ^_^ )"
    rostoRobo.style.backgroundColor = 'pink'

})

btnBronca.addEventListener('click', function() {

    rostoRobo.textContent = "( >_< )"
    rostoRobo.style.backgroundColor = 'red'

})

btnDormir.addEventListener('click', function() {

    rostoRobo.textContent = "( -_- )\n zZz"
    rostoRobo.style.backgroundColor = 'darkblue'

})