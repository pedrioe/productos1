// multiplicar todos los elementos del array
let coleccion = [5, 7, 10, 13, 2, 1, 1, 3]
// let resultadoDos = coleccion[0];

// for (let i = 1; i < coleccion.length; i++) {
// resultadoDos *= coleccion[i]; 
// }

// console.log(resultadoDos);

// sumas los elementos de los array hasta que encuentre un uno.array
let resultado = 0;

for ( let i = 0; i < coleccion.length; i++){
    if(coleccion[i]!=1){
        resultado += coleccion[i];
        } else {
            break
        }
}
console.log(resultado);









