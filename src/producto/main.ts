import { contador, llenarData, productos } from "./producto.service";

llenarData({
  precio: 100,
  name: "Audifonos",
  stock: 1
})
console.log(productos[0]);

llenarData({
  precio: 10,
  name: "Camara",
  stock: 2
});

llenarData({
  precio: 200,
  name: "Celular",
  stock: 10
});

console.log(productos[2]);
console.log(productos);

console.log(contador);
