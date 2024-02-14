// Entrada de datos
const celcius = Number(prompt("Ingrese la Tº en grados Celcius"));

// Proceso de datos
// Se hace la conversión de grados celcius a kelvin, a celcius se le suman 273.15.
const kelvin = celcius + 273.15;
// Se hace la conversión de grados celcius a fahrenheit. Se multiplica celcius por 9/5 y al resultado se le suman 32
const fahrenheit = (celcius * 9/5) + 32;

//Salida de datos
// Se muestra en el browser el resultado de la conversión de grados celcius a kelvin
document.write(`${celcius}º Celcius equivalen a ${kelvin}º kelvin <hr>`);
// Se muestra en el browser el resultado de la conversión de grados celcius a Fahrenheit
document.write(`${celcius}º Celcius equivalen a ${fahrenheit}º Fahrenheit`);