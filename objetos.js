const productos = [
  {
    nombre: "bicicleta",
    stock: 2,
    categoria: "deporte",
    precio: 350,
    valoracion: 4.8,
  },
  {
    nombre: "xbox",
    stock: 1,
    categoria: "videojuego",
    precio: 5000,
    valoracion: 4,
  },
  {
    nombre: "ps5",
    stock: 1,
    categoria: "videojuego",
    precio: 499,
    valoracion: 4.2,
  },
];

// Media de las voloraciones de los productos.
// let media= 0 ;

// for ( let i = 0; i < productos.length; i++ ){
//     media +=productos[i].valoracion /productos.length;
// }
// console.log(productos[i].nombre, productos[i].precio );
// console.log(media);

// Funcion que evalue el nombre y el stock del producto mas caro.

// let mayor = productos[0].precio ;

// for (let i = 0; i < productos.length; i++) {
//   if (productos[i].precio > mayor) {
//     mayor = productos[i].precio;
//   }
// }
// for(let i = 0; i < productos.length; i++) {
//     if( mayor == productos[i].precio) {

//     console.log( `el nobre del producto mas caro es ${productos[i].nombre} y el stock de este producto es: ${productos[i].stock}`);
//     }

// }
