//Tipado dentro de TS

var laboratorio: string = "Gory";
console.log(laboratorio);

var laboratorio: string = "Xian";
console.log(laboratorio);


//No se puede ingresar datos de otro tipo en una misma variable
//var laboratorio = 50;

//TIPOS INFERIDOS

var ejemplo2 = 34;
let ejemplo3 = {};
console.log(ejemplo3);

//var ejemplo2 = true;

// NOMBRES DE VARIABLES IGUALES

(() => {
  let productName = "Telefono";
  let productPrice = 499.99;

  console.log(productName);

  productName = "licuadora";
  productName.toLowerCase();

  console.log(productName);

  productPrice.toFixed();
  console.log(productPrice);
}
)();
