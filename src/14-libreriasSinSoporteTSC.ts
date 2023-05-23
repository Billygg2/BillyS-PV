// Librerias que no son soportadas en TSC

import _ from 'lodash';

const data = [
   {
    user : "Diego",
    role : "Docente"
   },
   {
    user : "Byron",
    role : "Docente"
   },
   {
    user : "nc",
    role : "Estudiante"
   },
   {
    user : "Billy",
    role : "Estudiante"
   },
   {
    user : "Max",
    role : "Estudiante"
   },
   {
    user : "Ken",
    role : "Estudiante"
   },
   {
    user : "Esteban",
    role : "Estudiante"
   },
   {
    user : "Andres",
    role : "Estudiante"
   },
   {
    user : "Max",
    role : "Estudiante"
   },

   {
    user : "Pablo",
    role : "Autoridad"
   },
   {
    user : "Ivan",
    role : "Autoridad"
   },
]
console.log(data);
console.log(_.chunk(data, 2)[2]);

const rta = _.groupBy(data, (item) => (item.role));
console.log(rta);

const ejemplo = _.join(data, '|||');
console.log(ejemplo);

