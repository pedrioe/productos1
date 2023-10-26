/**
 * algoritmo que lea 3 numeros y nos retorne el mayor, o que en caso de serlo
 * nos retornara un string que diga todo iguales.
 */

let readline= require("readline-sync");

let numeroUno = Number (readline.question("Dime un numero"));
let numeroDos = readline.question("Dime otro numero");
let numeroTres= readline.question("Dime un tercer numero");


console.log(numeroUno);
console.log(numeroDos);
console.log(numeroTres);

if( numeroUno == numeroDos && numeroDos == numeroTres ){
    console.log("Este numero son iguales")
} else if( numeroUno > numeroDos && numeroDos > numeroTres){
    console.log("El numero uno es el mayor ")
} else if(numeroUno < numeroDos && numeroDos > numeroTres){
    console.log("El numero dos el el mayor ")
} else {
    console.log("El numero tres es el mayor")}