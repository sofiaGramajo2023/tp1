


num = window.prompt('Ingrese un número','Escriba aquí el primer número');

if( num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0){
    document.write ('El número ingresado si es divisible por  2,3,5 o 7');
}
else {
    document.write ('El número ingresado NO es divisible por ningún número');
}