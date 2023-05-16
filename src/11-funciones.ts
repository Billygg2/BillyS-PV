// Funciones en tsc

type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
type Genero = 'Hombre' | 'Mujer';

function crearProducto(
  nombre: string,
  costo: number,
  genero: Genero,
  talla: Sizes,
  stock: number|null,
  createAt: Date
){
  return{
    nombre,
    costo,
    genero,
    talla,
    stock,
    createAt
  }
}

const producto1 = crearProducto(
  "Zapato deportivo",
  70,
  "Hombre",
  "XL",
  null,
  new Date("02/02/93"),
  )

  console.log(producto1);
  console.log(producto1.createAt);

// Variables Opcionales

function crearProducto1(
  nombre: string,
  costo: number,
  createAt: Date,
  genero: Genero,
  talla?: Sizes,
  stock?: number|null,
){
  return{
    nombre,
    costo,
    genero,
    talla,
    stock,
    createAt
  }
}

const producto2 = crearProducto1(
  "Zapato Casual",
  50,
  new Date("04/12/33"),
  "Hombre",
  "XL",
  null,
  )

  console.log(producto2);
  console.log(producto2.createAt);
