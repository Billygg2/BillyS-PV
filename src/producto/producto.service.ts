import { Sizes, Data, Prodcut } from "./producto.model";

export let user:Data [] = [];
export let productos:Prodcut [] = [];
export let contador:number = 0;

export function llenarData(producto: Prodcut):number {
  contador += producto.stock;
  productos.push(producto);
  return contador
}

