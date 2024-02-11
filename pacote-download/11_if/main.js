document.write("Abra o console!");

console.log("Antes do if!");

if(true){
    console.log("Testando o if!");
}; //declaração de um bloco 'if'
if(false){
    console.log("Testando o if!");
}; //negação da condição

console.log("Depois do if!");

var idade = 17;
var idadeMinima = 18

if(idade >= idadeMinima){
    console.log("Pode tirar carteira de habilitação!");
}; //condição: caso idade seja maior ou igual ao valor da variável 'idadeMinima'

if(idade = 17){
    console.log("Precisa esperar mais um ano!");
}; //condição: caso idade seja igual a 17

//dois 'ifs' podem existir um após o outro, porém existem formas melhores de organização (como o 'else if' por exemplo)