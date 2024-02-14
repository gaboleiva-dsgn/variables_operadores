//Datos de entrada
const num1= Number(prompt("Ingrese el primer número: "));
const num2= Number(prompt("Ingrese el segundo número: "));
const num3= Number(prompt("Ingrese el tercero número: "));
const num4= Number(prompt("Ingrese el cuarto número: "));
const num5= Number(prompt("Ingrese el quinto número: "));

//Proceso de datos
const suma = num1 + num2 + num3 + num4 + num5;
const promedio = suma/5;

//Salida de datos
document.getElementById("suma").innerHTML=(`Suma de los números ingresados: ${suma}`);
document.getElementById("promedio").innerHTML=(`Promedio de los números ingresados: ${promedio}`);