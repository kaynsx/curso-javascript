var nome = 'Caio';
console.log(nome);
console.log(typeof nome);

console.log(typeof "smt"); //reconhece o tipo de dado mesmo não sendo uma variável

var sobrenome = 'Ferreira';
var nomeCompleto = nome + " " + sobrenome; //concatenação de variáveis do tipo 'string'
console.log(nomeCompleto);
console.log(typeof nomeCompleto);

console.log(typeof "5.292929");

var frase = 'Esta é uma frase complexa'; //aspas simples também são válidas para declaração de variáveis do tipo 'string'
console.log(frase);
console.log(typeof frase);

console.log(nome + ", " + frase); //concatenação entre variáveis 'string' com aspas simples e duplas é válida

document.write('Ele disse: "Olá!"'); //envia o texto para a tela

//para as aspas duplas aparecerem, basta delimitar o texto com aspas simples
//por mais que ambas funcionem, é recomendado que se use apenas um tipo em todo o projeto

console.log("Este número: " + "432"); //concatenação do texto com texto
console.log("Este número: " + nome); //concatenação do texto com o valor da variável 'nome'