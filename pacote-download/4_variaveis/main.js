var teste = 1; //declaração da variável e atribuição do valor 1
console.log(teste);

nome = 'Isi'; //declaração de variável global (como se fosse um 'var', perigoso pois pode sobrescrever variáveis com mesmo nome)
console.log(nome);

//sempre declarar variável com 'var'

teste = 'Caio'; //atribuição do texto em substituição do valor anterior da variável 'teste'
console.log(teste);

//mesmo podendo ser mudado, o tipo da variável tem de ser condizente com seu uso desde o momento da sua declaração

var $nome = 'Vitor' 
var _nome = 'Samy' //únicos caracteres especiais que podem aparecer em nomes de variáveis
console.log($nome);
console.log(_nome);

//nomes de variáveis não podem começar com números, mas eles podem aparecer ao longo do nome

var meuPrimeiroNome = 'Jeferson' //sintaxe para nomes de variáveis com mais de uma palavra (camelCase)
console.log(meuPrimeiroNome);

let testando = 1;
const ola = 2; //outras formas de declaração de variáveis
console.log(testando);
console.log(ola);

var meuNome; //declaração de variável vazia
meuNome = 'Benjamin'; //atribuição de valor a variável vazia
console.log(meuNome);