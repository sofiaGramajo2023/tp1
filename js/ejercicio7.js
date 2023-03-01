
numero1 = window.prompt('Ingrese un número','Escriba aquí el primer número');

numero2 = window.prompt('Ingrese un número','Escriba aquí el segundo número');

numero3 = window.prompt('Ingrese un número','Escriba aquí el tercer número');




if ( numero1 > numero2 && numero1 > numero3){ 
    document.write ('El mayor número es: ' + ' ' + numero1 );

}
 
else if( numero2 > numero1 && numero2 > numero3) {
        document.write ('El mayor número es:' + ' ' + numero2);

    }


else if ( numero3 > numero1 && numero3 > numero2){ 
    document.write ('El mayor número es:' + ' ' + numero3);
} 