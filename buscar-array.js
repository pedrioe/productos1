// * Crear una funcion que recibe como parametros un array de numeros y un numero
//  * La funcion tiene que devolver la posicion del numero dentro del array
//  * o no existe si numero no esta en el array.
//  *
//  * array = [1, 2, 3, 4];
//  *
//  * si numero = 2 -> debe devolver 1;
//  * si numero 5 -> debe devolver "no existe";
//  *
//  * datos de uso:
//  *
//  * array = [4, 6, 18, 15, 10] numero = 18
//  * array = [1, 2, 3, 4, 5, 6] numero = 8
//  * array = [21, 31, 41, 51, 61] numero = 61

let arrayUno = [4, 6, 18, 15, 10];
let arrayDos = [1, 2, 3, 4, 5, 6];
let arrayTres = [21, 31, 41, 51, 61];
let numero1 = 18;
let numero2 = 8;
let numero3 = 61;

function buscar(listado, numero) {
  for (i = 0; i < listado.length; i++) {
    if (listado[i] == numero) {
      return [i];
    }
  }
  return "No existe";
}

console.log(buscar(arrayUno, numero1));
console.log(buscar(arrayDos, numero2));
console.log(buscar(arrayTres, numero3));

// ejercicio2(2)
// buscar si existen los nuemeros dentro de
