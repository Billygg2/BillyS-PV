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

  // Retorno en las funciones 

  // Funciones tipo VOID

function imprimirNombre(
   yourName : string
): void {
  console.log(`Bienvenido ${yourName} a TS`);
}
imprimirNombre("Billy");

// funciones con retorno

let resultado = 0

function operacion1(
  a : number,
  b : number):number {
    return a + b;
  }

  let ejemploFuncion = console.log(operacion1(45, 50));

  // funciones con varios retornos

  function clasificador(
    a: number,
    b: number,
    c: number,): number|string{
      if (a>b && a>c){
        return a;
      }
      if (b>a && b>c){
        return b;
      }
      if (c>a && c>b){
        return b;
      } else{
        return `Los numeros son iguales`;
      }
    }

    let clasificador1 = console.log(clasificador(6, 6, 6));
  