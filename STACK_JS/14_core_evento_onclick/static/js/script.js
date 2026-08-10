console.log("Conexión de js exitosa...");

let boton = document.getElementById("Iniciar");
boton.addEventListener("click", function () {
this.innerText = "Cerrar sesión"
});

let Boton2 = document.getElementById("Perfil");

Boton2.addEventListener("click", function () {
  alert("Nombre: Xavier Olmos \nEdad 16");
});

let btnLike = document.getElementById("Like");

Like.addEventListener("click", function () {
  // 1. parseInt lee directamente el número al inicio del texto
  let likes = parseInt(Like.innerText);

  // 2. Incrementar +1
  likes++;

  // 3. Actualizar colocando el número a la izquierda
  Like.innerText = `${likes} Me gusta`;
});

let Gusta = document.getElementById("Gusta");

Gusta.addEventListener("click", function () {

  let Gustas = parseInt(Gusta.innerText);
1
  Gustas++;

  Gusta.innerText = `${Gustas} Me gusta`;
});
