// pedir al usuario un numero por consola y que nos devulva el numero tal que asi;
// si el usuario intorduce un cuatro
// *
// **
// ***
// ***+

let readline = require("readline-sync");

let numero = Number(readline.question("pasame un numero"));

// for (let i = 0; i < numero ; i++) {
//   linea = " * ";
//   for (let j = i; j < 0; j--) {
//     linea += " * ";
//   }
//   console.log(linea);
// }


let linea = "";
for (let i = 0; i < numero ; i++){
  linea += " * ";
  console.log(linea);
}
