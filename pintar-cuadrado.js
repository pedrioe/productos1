// pedir por consola un numero y crear con array de longituud de
// numero introducido que contenga *. Ejemplo, se introduce 2, debe obtener [`*`, `*`];

let readline = require("readline-sync");

// let numero = Number(readline.question("Pasame un numero"));
// let linea = [];
// for (let i = 0; i < numero; i++)
// linea[i] = `*`;




// console.log(linea)

// que el * aparezca solo en el primero y el ultimo numero.
let numero = Number(readline.question("Pasame un numero"));
let linea = [];
for ( let i = 0; i < numero; i++ ){
    if ( i==0 || i == numero-1){
        linea[i]= `*`;
    }
    else { linea[i]=` `;}
}


console.log(linea)




