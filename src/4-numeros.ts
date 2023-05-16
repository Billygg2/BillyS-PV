//Declaracion y operaciones con numeros

let numero: number = 30;

let suma = numero + 10;
let suma2 = numero + "10";

console.log(suma);
console.log(suma2);

// Variables sin inicializar

let variable: string = "ejemplo";
console.log("La variable es: " + variable);

// Transformacion de string a number

let transformacion = parseInt("32");

var operacion = transformacion + 7;
console.log(operacion);

let numeroString: string = "200";
let nuevoNumero: number;
nuevoNumero = parseInt(numeroString);
console.log(nuevoNumero);

// Solo funciona si y solo si

let numeroPrueba: number = parseInt("ejemplo")
console.log(numeroPrueba);

// Numeros binarios y hexadecimales
let primerHexa = 0xfff;
let primerHexa2 = 0xff;
console.log(primerHexa, primerHexa2);

let primerBinario = 0b1010;
let primerBinario2 = 0b101010;
console.log(primerBinario, primerBinario2);
