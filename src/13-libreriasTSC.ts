// librerias que son soportadas con TSC

import {format, compareAsc} from "date-fns";

console.log(format(new Date(2000, 11, 10), "dd/MM/yyyy")); // entiende los meses desde el #0

const fechas = [
  new Date(1944, 11, 22),
  new Date(2010, 10, 20),
  new Date(1900, 9, 15),
  new Date(1940, 8, 12),
  new Date(1945, 7, 13),
]
fechas.sort(compareAsc);
console.log(fechas);
