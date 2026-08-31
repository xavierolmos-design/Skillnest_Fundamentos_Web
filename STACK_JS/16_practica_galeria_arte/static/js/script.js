console.log("Conexión de js exitosa...");

const pintura = document.getElementById("Pintura");

pintura.addEventListener("mouseover", function () {
  pintura.src = "static/images/2.jpg" ; 
  console.log("Prueba")
});


pintura.addEventListener("mouseout", function () {
  pintura.src = "static/images/1.jpg";

});
