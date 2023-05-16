let variableRara: any;

variableRara = 5;
variableRara = "raro";
variableRara = true;
variableRara = {};
variableRara = [];
variableRara = null;
variableRara = undefined;

// Tratar a any como un tipo de dato especifico;
// Convertir any en un string
variableRara = "Ejemplo de string";
const ejemploAny = (variableRara as string).toLowerCase();
console.log(variableRara);

// Convertir Any a un number
variableRara = 12, 111
const ejemploNumero = (<number>variableRara).toFixed(1);
console.log(variableRara);


