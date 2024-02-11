document.write("Abra o console!");

var idade = 17;
var nome = "Caio";

if(nome == "Caio" || idade >= 14){
    console.log("O usuário pode entrar na aula!"); //só é executado se uma das condições retornar 'true'
} else{
    console.log("Este usuário não pode entrar na aula!"); //só é executado se ambas as condições retornarem 'false'
};

if(nome == "Caio" && 15 > 20 || 10 == 10){ //'and' e 'or' podem ser utilizados na mesma sentença condicional
    console.log("Testando!"); //sempre vai ser executado enquanto uma das condições retornar 'true' (por caua do operador 'or')
};