import { llenarData, productos } from "./producto.service";

llenarData({
  precio: 100,
  name: "Billy",
  stock: 6
})
console.log(productos[0]);

llenarData({
  precio: 10,
  name: "Camara",
  stock: 20
});

llenarData({
  precio: 200,
  name: "Celular",
  stock: 100
});

console.log(productos[2]);
console.log(productos);
