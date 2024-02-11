document.write("Abra o console!");

var x = 1; 
var y = 3; //escopo global

console.log(x, y);

function teste(){
    var z = 0; //escopo local da função 'teste'
    console.log(z);
};
teste();

//a função 'teste' pode acessar as variáveis 'x' e 'y', uma vez que elas estão no escopo global
//já o escopo global não pode acessar a variável 'z', uma vez que ela está no escopo local da função 'teste'

function testando(){
    var z = 5; 
    console.log(z);
};
testando();

//a variável 'z', já criada na função 'teste', não assumirá o mesmo valor que tinha antes, uma vez que agora ela está no escopo local da função 'testando'
//logo a variável 'z' é iniciada em dois escopos diferentes (com dois valores diferentes que não se misturam)

//as estruturas 'if', 'for', 'while', etc. não possuem escopo local
//basicamente, vamos trabalhar com a ideia de dois escopos: global (código) e local (função)