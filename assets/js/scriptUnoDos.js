/* Realizar el diagrama de flujo para las siguientes operaciones matemáticas: Suma,
Resta, División, Multiplicación y el módulo de un número, partiendo de dos números
ingresados por el usuario. (1.5 Puntos) */

/* Forma uno */
/* 1.- Declarar dos variables */
var numeroUno;
var numeroDos;
/* 2.- Solicitar los dos números al usuario */
numeroUno = prompt('Ingresa el primer número: ');
numeroDos = prompt('Ingresa el segundo número: ');
/* 3.- Parsear los datos */
numeroUno = parseFloat(numeroUno);
numeroDos = parseFloat(numeroDos);
/* 4.- Realizar cada operación */
var suma = numeroUno + numeroDos;
var resta = numeroUno - numeroDos;
var division = numeroUno / numeroDos;
var multiplicacion = numeroUno * numeroDos;
var modulo = numeroUno % numeroDos;
/* 5.- Mostrar cada resultado en pantalla */
console.log(`El resultado de la suma es ${suma}`);
console.log(`El resultado de la resta es ${resta}`);
console.log(`El resultado de la división es ${division}`);
console.log(`El resultado de la multiplicación es ${multiplicacion}`);
console.log(`El resultado del módulo es ${modulo}`);

/* Forma dos */
/* 1.- Declarar dos variables */
var numeroUno;
var numeroDos;
var resultado;
/* 2.- Solicitar los dos números al usuario */
numeroUno = prompt('Ingresa el primer número: ');
numeroDos = prompt('Ingresa el segundo número: ');
/* 3.- Parsear los datos */
numeroUno = parseFloat(numeroUno);
numeroDos = parseFloat(numeroDos);
/* 4.- Realizar cada operación */ /* 5.- Mostrar cada resultado en pantalla */
resultado = numeroUno + numeroDos;
console.log(`El resultado de la suma es ${resultado}`);
resultado = numeroUno - numeroDos;
console.log(`El resultado de la resta es ${resultado}`);
resultado = numeroUno / numeroDos;
console.log(`El resultado de la división es ${resultado}`);
resultado = numeroUno * numeroDos;
console.log(`El resultado de la multiplicación es ${resultado}`);
resultado = numeroUno % numeroDos;
console.log(`El resultado del módulo es ${resultado}`);