// Nul y Undefined

let myVar = null;  // Tipo any
let otraVar = undefined; //tipo Any o objeto
console.log("Type of otraVar: ", typeof(otraVar), "Type of myVar: ", typeof(myVar));


let myNull: null = null; // tipo null
let myUndefired: undefined = undefined; // Tipo undefined
console.log("Type of myNull: ", typeof(myNull), "Tipe of myUndefined: ",typeof(myUndefired));


let myNumber: number|null = null;
console.log(typeof(myNumber));
console.log("myNumber: ", myNumber);

myNumber = 60;
console.log("Type of myNumer: ", typeof(myNumber));
console.log("myNumber: ", myNumber);

let myString: string| undefined = undefined;
console.log("Type of myString: ", typeof(myString));
console.log("myString: ", myString);

myString = "Hola TS";
console.log("Type of myString: ", typeof(myString));
console.log("myString: ", myString);
