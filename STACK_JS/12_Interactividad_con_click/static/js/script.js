console.log("Conexión de js exitosa...");

document.getElementById("colorButton").addEventListener("click", function () {
   cambiarColor();
});

// Función que cambia el color de fondo al hacer clic
function cambiarColor() {
   let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
   let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
   document.body.style.backgroundColor = colorAleatorio;
}
document.getElementById("yellowButton").addEventListener("click", function () {
   cambiarColorAmarillo();
});
function cambiarColorAmarillo() {
   document.body.style.backgroundColor = "#ffd700"; // Cambia el color de fondo a amarillo
}
   let colores = ["#ffd700"];
   let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
   document.body.style.backgroundColor = colorAleatorio;

   document.getElementById("blueButton").addEventListener("click", function () {
      cambiarColorAzul();
   });
   function cambiarColorAzul() {
      document.body.style.backgroundColor = "#4682b4"; // Cambia el color de fondo a azul
   }