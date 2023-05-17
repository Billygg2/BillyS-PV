// objetos como parte de una funcion

function imprimirDatos(
    data: {
        userName : string,
        email: string
    }
    ):void
    {
        console.log(`Tu nombre de usuario ${data.userName}, y el email registrado es: ${data.email}`)
    }
imprimirDatos({userName: "Billy", email: "billy@gmail.com"});

// obejetos como tipos

type userData = {
    nombre : string,
    edad : number,
    email : string,
    telefono : string
}

let userList: userData[] = [];

userList.push(
    {
    nombre: "Billy",
    edad: 19,
    email: "billy@gmail.com",
    telefono: "099990"
    }
);

userList.push(
    {
    nombre: "Diego",
    edad: 29,
    email: "diego@gmail.com",
    telefono: "099990"
    }
);

console.log(userList[1]);
