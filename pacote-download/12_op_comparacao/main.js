document.write("Abra o console!");

var idade = 18;
var possuiCarro = 0;

if(idade >= 18){
    console.log("O usuário pode tirar a carteira de habilitação!");
}; //confere se o valor da variável 'idade' é maior ou igual a 18

if(idade <= 17){
    console.log("O usuário não pode tirar a carteira de habilitação!");
}; //confere se o valor da variável 'idade' é menor ou igual a 17

if(possuiCarro){
    console.log("O usuário pode andar de carro!");
}; //a variável 'possuiCarro' foi interpretada como 'false' pois seu valor é 0

//0 = false, 1 = true

var nome = "Isi";

if(nome == "Caio"){
    console.log("O seu nome é Caio");
}; //== é uma igualdade

//= é uma atribuição,

if(nome != "Caio"){
    console.log("O seu nome não é Caio");
}; //!= é uma diferença

if(20 > 10){
    console.log("Passou!");
}; //> é uma comparação maior que

if(10 < 20){
    console.log("Acertou!");
}; //< é uma comparação menor que