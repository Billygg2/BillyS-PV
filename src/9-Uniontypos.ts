// UNIO DE TIPO DE DATOS
let userId: number | string;

userId = "Diego";
console.log(userId);
userId = 500;
console.log(userId);

(() => {
  function hello(id: number | string) {
    if (typeof id === "number") {
      console.log(`Su usuario es: ${id}`);
    } else {
      console.log(`Su ID es: ${id}`);
    }
  };
  hello("Perro")
  hello(300)
})();