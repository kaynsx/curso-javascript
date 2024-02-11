document.write("Abra o console!");

var numero = 5;

if(numero === 5){
    console.log("O número é 5!");
}; //confere o tipo de dado, nesse caso 'number'

var numeroString = '5';

if(numeroString === 5){
    console.log("O número é 5!");
}; //o valor da variável 'numeroString' é do tipo 'string', logo o resultado do 'if' é 'false' pois a condição pedida necessita do tipo 'number'

if(numero !== 5){
    console.log("Não é o número 5 do tipo Number");
}; //confere o tipo e o valor do dado, nesse caso um 5 do tipo 'number'

//=== é uma diferença de tipo, !== é uma diferença de tipo e valor