const radar = document.getElementById('radar');

radar.addEventListener('mouseenter', function(){
    radar.style.backgroundColor = 'red';
    radar.textContent = "Entrou!";
});

radar.addEventListener('mouseleave', function (){
    radar.style.backgroundColor = 'gray';
    radar.textContent = "Saiu!";
});