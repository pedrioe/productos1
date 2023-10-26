/*
Ejercicio clockAngle
 *
Escribe un algoritmo que, dandole un número N que representa dónde
se encuentra actualmente el
minutero en un reloj, devuelva el ángulo
formado por el minutero y la marca de las 12 en punto en el reloj.
 *
El numero no podra ser mayor que 12, si lo fuera, el algoritmo retornara
que el numero introducido es incorrecto
 */

const readline = require("readline-sync");

const N = Number(readline.question("Introduce un numero del 1 al 12"));
const angunoloMinutero = calcularAngunoloMinutero
console.timeLog(`El angulo del minutero en la posicion ${N} es ${angunoloMinutero}`)

function calcularAngunoloMinutero(N) {
    if( N >= 1 && N <=12) {
        const angulo = (N/12) * 360;
        return angulo;
    } else {
        return " el numero introducido es incorrecto. Debe introducir entre el 1 y el 12";
    }
}



