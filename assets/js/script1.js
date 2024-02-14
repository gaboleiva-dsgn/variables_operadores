// entrada de datos
// El usuario ingresa dos variables, num1 y num 2
const num1 = Number(prompt("Ingrese el primer número:"));
const num2 = Number(prompt("Ingrese el segundo número:"));

// Proceso de datos
// Se calcula la suma de ambos números ingresados
const suma = num1 + num2;
// Se calcula la resta de ambos números ingresados
const resta = num1 - num2;
// Se calcula la división de ambos números ingresados
const division = num1 / num2;
// Se calcula la multiplicación de ambos números ingresados
const multiplicacion = num1 * num2;
// Se calcula el residuo de ambos números ingresados
const modulo = num1 % num2;

// Salida de datos
// Se muestra en el browser el resultado de la suma
document.write (`La suma entre ${num1} y ${num2} es: ${suma} <hr>`);
// Se muestra en el browser el resultado de la resta
document.write (`La resta entre ${num1} y ${num2} es: ${resta} <hr>`);
// Se muestra en el browser el resultado de la división
document.write (`La división entre ${num1} y ${num2} es: ${division} <hr>`);
// Se muestra en el browser el resultado de la multiplicación
document.write (`La multiplicación entre ${num1} y ${num2} es: ${multiplicacion} <hr>`);
// Se muestra en el browser el residuo
document.write (`El residuo entre ${num1} y ${num2} es: ${modulo}`);
