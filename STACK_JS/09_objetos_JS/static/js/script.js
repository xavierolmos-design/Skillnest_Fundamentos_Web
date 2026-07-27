console.log("Conexión de js exitosa...");
function hamburgesaEspecial () {

    let hamburgesaEspecial = {
        extras: {

        }
    }
}



let auto = {
    Marca:"Honda Civic",
    Modelo:"Corolla",
    Motor:"Spoon Engine",
    Turbo:"T66 Turbo",
    OxidoNitroso:"NOS",
    Escape:"Motec system exhaust",
    extra: [
        "Wings West",
        "Aleron aluminio estilo R33 GT-R",
        "llantas Axis Se7ven de 17 o 18 pulgadas",
        "",
    ],

    piezasdeauto:function(){
        alert(`Auto: ${this.Auto}
        Modelo: ${this.Modelo}
        Motor: ${this.Motor}
        Turbo: ${this.Turbo}
        Oxído de Nitroso: ${this.OxidoNitroso}
        Escape: ${this.Escape}
        Extras: ${this.extras.join(" - ")}`)
    }
};
auto.piezasdeauto; //Fuera de la funcion lo llamamos método

function mostrarInformacion() {
let casa = {
    direccion:"Av. Siempre Viva 742",
    habitaciones:4,
    baños:2,
    mostrarInformacion:function(){
    alert(`Direccion: ${this.direction}
    \nHabitaciones: ${this.habitaciones}
    \nBaños: ${this.baños}`)
    }
    };
    casa.monstrarInformacion();
}