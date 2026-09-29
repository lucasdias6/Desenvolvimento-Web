const btnUsar = document.getElementById('btn-usar');
const btnCarga = document.getElementById('btn-carga');
const barraEnergia = document.getElementById('barra-energia');

const sistema = {
    energia: 100,

    consumir(){
        this.energia = this.energia - 20
        barraEnergia.style.width = this.energia + '%'
    },
    
    recarregar(){
        this.energia = 100
        barraEnergia.style.width = '100%'
    }
}


btnUsar.addEventListener('click', function(){
    sistema.consumir()
})

btnCarga.addEventListener('click', function(){
    sistema.recarregar()
})
