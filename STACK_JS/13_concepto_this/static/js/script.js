console.log("Conexión de js exitosa...");
// Seleccionamos el botón por su id
let boton = document.getElementById("cambiarTexto");
// Agregamos un evento 'click' al botón
boton.addEventListener("click", function () {
   let textoBoton = boton.textContent;
   // Cambia el texto del botón usando `this`
   if(textoBoton === "Haz clic en mí") {
      this.innerText = "¡Texto cambiado!"
   }
   else {
      this.innerText = "Haz clic en mí"
   }
});

// Seleccionamos todas las imágenes con la clase 'imagenEliminar'
let imagenes = document.querySelectorAll(".imagenEliminar");

// Agregamos un evento 'click' a cada imagen
imagenes.forEach(function (imagen) {
   imagen.addEventListener("click", function () {
       // Eliminamos la imagen al hacer clic
       this.remove();
   });
});
