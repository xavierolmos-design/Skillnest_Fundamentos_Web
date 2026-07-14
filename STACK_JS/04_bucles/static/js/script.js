console.log("Conexión de js exitosa...");

/* Ejemplo bucle for */
function contarhastados() {
    for (let i = 0; i < 3; i++) {
        alert(i);
    }
}
function cuentaRegresiva() {
    for (let i = 10; i > 0; i--) {
        alert(i);
    }
}
let usuarios = ["Ana", "Luis", "María"];

function recorrerLista() {
    // Lista es un tipo de dato (array/lista)
    // [] = ["nombre", 4, true, {2,4}]
    // let nombre = "Ana"; alert(nombre); let nombre = "Carlos", "Maria"
    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}
/* Ejemplo bucle while */
function reproducirCancion() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción
        reproduciendo = false;
    }
}
function cargarDatos() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert(`Cargando datos... ${datosPendientes} de 5`);
        datosPendientes--;
    }
}
function validarcontrasena() {
    let contraseñaCorrecta = false;
// !variable = variable es distinta a true
    while (!contraseñaCorrecta) {
        let intento = prompt("Ingresa tu contraseña:");
        if (intento === "1234") {
            contraseñaCorrecta = true;
            alert("Acceso concedido.");
            break; // Salir del bucle
        } else {
            alert("Contraseña incorrecta, intenta de nuevo.");
        }
    }
}