

var numero;

do{
numero = prompt('Escribe un numero');
  if(isNaN(numero) || numero <= 1){
  console.error('Ingresa un valor valido');
}
}while (isNaN(numero) || numero <= 1);
for (var conteo = 1; conteo <= numero; conteo++){
 console.log(conteo);
 }
