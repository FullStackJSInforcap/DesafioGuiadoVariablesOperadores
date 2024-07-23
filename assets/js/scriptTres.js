/* Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que
la transforme a grados Kelvin y Fahrenheit. (2 Puntos) */
/* Celsius a Kelvin: 0 °C + 273.15 = 273.15 K */
/* Celsius a Fahrenheit: (0 °C × 9/5) + 32 = 32 °F */

/* 1.- Pedir el dato en celsius */
var celsius = prompt('Ingrese los grados en Celsius: ');
/* 2.- Parsear a decimal */
celsius = parseFloat(celsius);
/* 2.- Transformar a Kelvin */
/* 0 °C + 273.15 = 273.15 K */
var kelvin = celsius + 273.15;
/* 3.- Transformar a Fahrenheit */
/* (0 °C × 9/5) + 32 = 32 °F */
var fahrenheit = (celsius * 9 / 5) + 32;
/* 4.- Mostrar resultados */
console.log(`El valor en kelvin de ${celsius} celsius es de: ${kelvin}`);
console.log(`El valor en fahrenheit de ${celsius} celsius es de: ${fahrenheit}`);