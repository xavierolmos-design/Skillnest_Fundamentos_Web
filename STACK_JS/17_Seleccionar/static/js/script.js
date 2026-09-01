console.log("Conexión de js exitosa...");

// Selecciona con querySelector
let title = document.querySelector("#title");
console.log(title);
console.log(`El contenido del titulo es: ${title.textContent}`);

let parrafos = document.querySelector("p");
console.log(parrafos);

//Selecciona una m¿imagen por querySelector
let logoImg = document.querySelector(".nav img");
console.log(logoImg);

//querySelector solo selecciona la primer clase
let parrafo = document.querySelector(".texto");
console.log(parrafo.textContent);

//boton inexistente
let boton = document.querySelector("#boton-inexistente");
//console.log(boton);

if (boton !== null) {
   boton.textContent = "Nuevo Texto";
} else {
   console.log("El botón no existe.");
}

//Tarea
/*Crea un boton y aplicar condicion al igual que ejemplo
-Debe cambiar su texto al momento de hacerle click
-debe utilizarse un hover js cambiando el color de fondo
*/

let BotonTarea = document.querySelector("#BotonPrueba");

if (boton !== null) {
   boton.textContent = "Nuevo Texto";
} else {
   console.log("El botón no existe.");
}

BotonTarea.addEventListener("click", function () {
  BotonTarea.style.backgroundColor = "Blue"
   BotonTarea.textContent = "Hola"
   BotonTarea.style.color = "black"; // Cambia color de la fuente
});

BotonTarea.addEventListener("click", function () {
   BotonTarea.style.backgroundColor = "Red";
   BotonTarea.textContent = "Click aquí";
   BotonTarea.style.color = "white";
});
