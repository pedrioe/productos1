/**
Ejercicio 4
 Cree un algoritmo que reciba 3 numeros y, si el primero de ellos
 es negativo, retorne el producto de los 3, si no lo es, retornara
 la suma. Si no se introducen tres numeros validos, retornara un string
 que diga Has introducido uno o varios caracteres no validos
 */
const readline = require("readline-sync");
let numeroUno = Number(readline.question("Introduce un numero"));
let numeroDos = Number(readline.question("Introduce un numero"));
let numeroTres = Number(readline.question("Introduce un numero"));
let resultado;

if (isNaN(numeroUno) || isNaN(numeroDos) || isNaN(numeroTres)) {
  resultado = "Has introducio uno o varios caracteres no validos";
} else if (numeroUno < 0) {
  resultado =  numeroUno * numeroDos * numeroTres;
  console.log(
    `La multiplicacio de ${numeroUno}, ${numeroDos} y ${numeroTres} es igual= ${resultado}`
  );
} else {
  resultado = numeroUno + numeroDos + numeroTres;
  console.log(
    `La suma de ${numeroUno}, ${numeroDos} y ${numeroTres} es igual= ${resultado}`
  );
}
