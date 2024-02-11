var numero = 5; 
console.log(numero);
console.log(typeof numero); //verifica o tipo de dado da variável

var float = 5.32; 
console.log(float);
console.log(typeof float); 

var textoComNumero = '523';
console.log(textoComNumero);
console.log(typeof textoComNumero); //mesmo representando um número, por estar entre aspas simples se torna uma 'string'

console.log(numero + float); //soma de duas variáveis do tipo 'number'
console.log(numero + textoComNumero); //soma de uma variável do tipo 'number' com uma do tipo 'string'

//se tentarmos somar um 'number' com uma 'string', o resultado será uma 'string' formada pelas duas partes que realizaram a conta (concatenação)

console.log(NaN);
console.log(typeof NaN);
console.log(+Infinity);
console.log(typeof +Infinity);
console.log(-Infinity);
console.log(typeof -Infinity); //todos os valores simbólicos que representam o tipo 'number'