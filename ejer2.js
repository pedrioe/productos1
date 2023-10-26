/**
 Ejercicio 2
Escriba un algoritmo que lea dos numeros y la operación a realizar, y retorne el valor
de la operacion correcta segun el nombre de la funcion
Por ejemplo:
El usuario introduce 7 luego un 3 y luego suma y debe devolver 10
El usuario introduce 8, luego 3 y luego resta y debe devolver 5
 *
Las operaciones permitidas son: suma, resta, producto y división.
 */

let numeroUno = 7;
let numeroDos = 3;
let numeroTres = 8;
let numeroCuatro = 3;


let suma = numeroUno + numeroDos;
let resta = numeroTres - numeroCuatro;

console.log(`La suma de ${numeroUno} y ${numeroDos} es: ${suma}`);
console.log(`la resta de ${numeroTres} y ${numeroCuatro} es: ${resta}`);
