console.log("Conexión de js exitosa...");

// // variables a lista

// let nombre1 = "Ana";
// let nombre2 = "Pedro";
// let nombre3 = "Maria";
// let nombre4 = "Jose";

// //Transformar en array y mostrar

// let nombres = ["Ana", "Pedro", "Maria", "Jose"];

// // Mostrar a maria en alerta
// console.log(nombres[2]);
// let compras = [5000 , 2300, 12000, 4500, 3000]
// let alumnos = ["Ana", "Pedro", "Maria", "Jose",]
// let datos = ["Carlos", 18, true]
// let frutas = ["Manzana", "Pera", "kiwi", "Sandía",]

// // Desafio formar una oración con elementos
// // de las distintas variables
// // pedro tiene 18 años y compro una sandia que le costo 2300 pesos
// let oracion = `${alumnos[1]} tiene ${datos[1]} años y compro una ${frutas[3]} que le costo ${compras[1]} pesos.`;
// console.log(oracion);

// // La propiedad .length nos permite conocer la cantidad de elementos
// let frutas2 = ["Manzana", "Pera", "Kiwi", "Sandía"];

// console.log(frutas.length);

// // variable .length - 1 siempre traerá el último elemento
// let frutas3 = ["Manzana", "Pera", "Kiwi", "Sandía"];
// let ultima = frutas3[frutas3.length - 1];
// // variable .length - 1 siempre traerá el último elemento
// console.log(ultima);
// // Dedsafio
// // Del arreglo ["hola" , "a" , "todos" , "los" ,"programadores!"]
// // Mostrar el penultimo elemento y el ultimo concantenado

// let mensaje = ["hola" , "a" , "todos" , "los" , "programadores!"]
// let mensaje2 = `Hola a todos ${frase[frase.length - 2]} ${frase[frase.length - 1]}`
// console.log (mensaje2)

let listaTareas = ["Barrer" , "Cocinar" , "Realizar compras"]
function manipularArreglo() {
//Modificar un elemento del arreglo
listaTareas[1] = "Construir";
//Añadir un elemento al final de la lista
listaTareas.push("Cocinar");//Agrega un elemento al final
//Eliminar el ultimo elemento y mostrarlo
let eliminado = listaTareas.pop();
//Añadir un elemento al principio de la lista 
listaTareas.unshift("Boxear"); 
//Eliminar el primer elemento de la lista
eliminado += " " + listaTareas.shift();
//Mostrar resultado
alert(listaTareas.join(" - "))
alert("Elementos eliminados: " + eliminado)
}
//Buscar mayores edad
function buscarMayoresEdad () {
    let numeros = [10,35,7,90,22];

let mayor = numeros[0];

for(let i=1;i<numeros.length;i++){

    if(numeros[i] > mayor){

        mayor = numeros[i];

    }

}

console.log(mayor);
}


//Ejercicios

let edades = [15,18,20,14,25];
function Edades () {
    alert(`primera edad ${edades[0]} \nedad final ${edades[4]} \ntodas las edades: ${edades.length}`)
}

let nombres = ["juan", "pedro", "maria", "mario", "romario"]
function Alumnos () {
for(let i=0;i<nombres.length;i++){
    alert(`Los alumnos son ${nombres[i]}`)
}
}

//Recorrer un arreglo

function Recorre () {
let notas = [6.2,5.8,4.1,7.0];
for(let i=0;i<notas.length;i++){
    alert(notas[i]);
}
}

//sumar elementos en un bucle
function sumarBucles () {
let ventas = [10000,5000,12000,8000];
let total = 0;
for(let i=0;i<ventas.length;i++){
    total += ventas[i];
}
alert(total);
}

//calcular promedio
function calcularPromedio () {
let notas = [5.8,6.2,4.9,6.5];
let suma = 0;
for(let i=0;i<notas.length;i++){
suma += notas[i];
}
let promedio = suma / notas.length;
alert(`El promedio de las notas: ${promedio}`);
}

//Condiciones
function Condiciones () {
let edades = [12,15,18,20,25,35,];
let mayores = []
for(let i=0;i<edades.length;i++){
    if(edades[i] >= 18){
        mayores.push(edades[i]);
    }
}
alert(`De la lista de edades: ${edades.join(' / ')}
\n`)
}
//Encontrar el mayor y el menor 
function menorMayor (){
let numeros = [10,35,7,90,22,90,2];
let manor = numeros[0];
let mayor = numeros[0];
for(let i=1;i<numeros.length;i++){
    if(numeros[i] < menor){
        menor = numeros[i];
    } else if (numeros[i] > mayor) {
        mayor = numero[i];
    }

}
alert(`de los numeros ${numeros.join('/') }
El menor es: ${menor}
el mayor es: ${mayor}`)
}
