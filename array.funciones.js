// Devuelve la suma de todos los elemtentos lsitado


let resultado = 0;
// Devuelve la mmultiplicacion de todos los elementos del array del listado.
function sumar(listado) {
    for(i = 0; i < listado.length; i++){
     resultado += listado[i];
    }

return resultado;
}

function multiplicar(listado) {
    for(i = 0; i < listado.length; i++){
    resultado *= listado[i];
}
return resultado;
}
let coleccion = [5, 7, 10, 13, 2, 1, 1, 3];



// console log de la suma

console.log(sumar(coleccion));

// console log de la multiplicacion
console.log(multiplicar(coleccion));

