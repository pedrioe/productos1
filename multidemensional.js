

const multi = [[1, 2, 3, 4], [5, 6, 7, 8]];
let resultado = 0;

for (let i = 0; i < multi.length; i++) {
  for (let j = 0; j < multi[i].length; j++) {
    resultado += multi[i][j];
  }
}

console.log(`La suma de todos los elementos es: ${resultado}`);
