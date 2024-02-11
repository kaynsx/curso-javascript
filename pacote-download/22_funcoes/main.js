document.write("Abra o console!");

function primeiraFuncao(){
    console.log("Hello World das funções!"); //não funcionará enquanto não for invocada
}; //declaração de um bloco 'function'
primeiraFuncao(); //invocamento da função 'primeiraFuncao'

function dizerNome(nome){ //possui como parâmetro a variável 'nome' (não funciona sem um parâmetro, já que foi declarado)
    console.log("O nome é: " + nome + "!");
};
dizerNome("Caio"); //o nome Caio será o valor da variável 'nome' 
dizerNome("Isi");
dizerNome("Lala");
var nomeUsuario = "Baya";
dizerNome(nomeUsuario); //pode ser passado em forma de variável 

function soma(a , b){ //recebe dois parâmetros
    var soma = a + b; 
    return soma; //devolverá o valor da operação
};
var somaUm = soma(2, 5); //armazena o resultado retornado da função (não é sempre necessário armazenar esse valor em uma variável) 
console.log(somaUm);