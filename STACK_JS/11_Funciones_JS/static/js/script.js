console.log("Conexión de js exitosa...");

//Ejemplo funcion simple (Sin parametros)
function saludar(/* parámetros */) {
   alert("¡Hola, bienvenido!");
}

saludar(); //ejecucion de una función

//  👾Funciones con párametros
//El parámetro recibe un valor para trabajar en la función
//El parámetro recibe el tipo de dato el momento de tomar valor

function saludarNombre(nombre) { //parámetro nombre
   alert("¡Hola, " + nombre + "!");
}

saludarNombre("Xavier"); //ejecución de la funcion con parámetros (*argumentos*)
saludarNombre("Alex");

// 🧿Funciones con return
function EncontrarMayor() {

function encontrarMaximo(a, b) {
   if (a > b) {
       return a;
   } else {
       return b;
   }
}

let numero1 = 10;
let numero2 = 7;
let maximo = encontrarMaximo(numero1, numero2); // Maximo guardara el valor de retorno!!.
alert(`El número mayor entre, ${numero1}, y, ${numero2},
   \nes:, ${maximo}`);
}

//Tarea
/*
Crear una funcion que reciba 3 parametros, a, b y c. Debe sumar a + b y el resultado restarlo por c.
Devolver el valor final y mostrar con un alert
*/
function mostrarNumeros() {
    function calcularOpe(a, b, c) {
    return (a + b) - c; 
}
function Calcular() {
    //Creacion de variables
    let Numero1 = parseInt(prompt("Ingrese Priimer Numero"));
    let Numero2 = parseInt(prompt("Ingrese Segundo Numero"));
    let Numero3 = parseInt(prompt("Ingrese Tercero Numero"));
    //Muestra resultados
    let REsultado = calcularOpe(Numero1, Numero2, Numero3);

    alert(`El resultado de sumar ${Numero1} y ${Numero2}, y restarle ${Numero3}, \nes: ${REsultado}`);
}

Calcular();
}

/*
Crear una funcion reciba un parámetro y permita a través de un bucle contar hasta este.
Ej: Se recibe el número 5 y muestra: 1 - 2 - 3 - 4 - 5
*/
function contarHasta(a) {
    if(a)
    let NUMEROS = [];
    for (let i = 1; i <= a; i++) {
        NUMEROS.push(i)
    }
    return NUMEROS;
}

