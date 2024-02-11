document.write("Abra o console!");

//hoisting - içamento (todas as variáveis e funções são levadas para o topo do código, antes mesmo de serem interpretadas)
console.log(sobrenome); 
console.log(numero); //variáveis que só foram inicializadas nas linhas 7 e 8

//o código sabe que as variáveis existem, porém como elas ainda não foram inicializadas, elas são declaradas como indefinidas

var nome = null; //inicia a variável como nula
var sobrenome; //inicia a variável como indefinida, já que nenhum valor foi atribuído
console.log(nome);
console.log(sobrenome);

nome = "Caio"; //atribuição do texto para variável 'nome' (antes nula)
sobrenome = "Ferreira"; //atribuição do texto para variável 'sobrenome' (antes indefinida)
console.log(nome);
console.log(sobrenome);

var numero = 5;
console.log(numero);

//hoisting está presente em todos os códigos js