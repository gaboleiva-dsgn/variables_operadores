//Datos de entrada
// Se entrega un número de días asignado
const diasAsignados = 777;

//Proceso de datos
// se calculan los años dividiendo los diasAsignados por 365. Se ocupa la función Match.floor para ocultar decimales y mostrar un número entero
const anos = Math.floor(diasAsignados / 365); 
// se calculan obteniendo el residuo de diasAsignados por 365 y el reslutado dividiendolo por 7. Se ocupa la función Match.floor para ocultar decimales y mostrar un número entero
const semanas = Math.floor((diasAsignados % 365) / 7);
// se calculan obteniendo el residuo de diasAsignados por 365 y luego obteniendo el residuo del resultado por 7. Se ocupa la función Match.floor para ocultar decimales y mostrar un número entero
const dias = (diasAsignados % 365) % 7;

//Salida de datos
// Se muestran los datos de salida usando console.log, con concatenación e interpolación
console.log( + diasAsignados + " días, corresponden a " + `${anos} años, ${semanas} semanas  y ` + dias + " días." );