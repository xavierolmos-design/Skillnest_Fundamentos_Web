console.log("Conexión de js exitosa...");

const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
   console.log("El ratón está sobre el botón");
   boton.style.backgroundColor = "blue"
});

boton.addEventListener("mouseout", function () {
   console.log("El ratón ha salido del botón");
   boton.style.backgroundColor = "red"
});


//Tarea
/*
Crear dos botones con evento onmouseover y onmouseout

- Cambia el texto de un boton 
- Cambiar el color de fondo y color de texto del segundo boton.
*/
const boton2 = document.getElementById("miBoton2"); // Nombre único: boton2

boton2.addEventListener("mouseover", function () {
   boton2.textContent = "Nose"
   boton2.style.color = "white"; // Cambia color de la fuente

});

boton2.addEventListener("mouseout", function () {
   boton2.style.backgroundColor = "red";
   boton2.textContent = "Pasa el cursor sobre mi"
});

const boton3 = document.getElementById("miBoton3");

boton3.addEventListener("mouseover", function () {
  boton3.style.backgroundColor = "Blue"
   boton3.textContent = "Hola"
   boton3.style.color = "black"; // Cambia color de la fuente

});

boton3.addEventListener("mouseout", function () {
   boton3.style.backgroundColor = "Red";
   boton3.textContent = "Pasa el cursor sobre mi"
   boton3.style.color = "white";
});

