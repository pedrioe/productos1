// haz un aleatorio que sume todos los numeros en un array

const lista = [12, 12, 5, 1, 9, 7, 12, 54, 45]
let resultado = 0;
// for (let i = 0; i < lista.length; i++) {
//     resultado += lista[i];
//   }
  
  
// sumar todos los numeros del array



// solo sumar los pares

// for ( let i = 0; i<lista.length; i++) {
//     if ( lista[i]%2==0){
//         resultado+= lista[i];
//     }
// }

// sumas solo los impares
for ( let i = 0; i<lista.length; i++) {
 if ( i %2==1){
    resulado+= lista[i];
 }
}

console.log(`la suma de todo es ${resultado}`);

