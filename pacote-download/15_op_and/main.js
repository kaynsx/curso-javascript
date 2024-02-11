document.write("Abra o console!");

var idade = 17;
var nome = "Caio";

if(nome == "Caio" && idade == 17){
    console.log("O usuário pode entrar na aula!"); //só é executado se ambas as condições retornarem 'true'
} else{
    console.log("Este usuário não pode entrar na aula!");
}; 

if(1 == 1 && 3 > 2 && true){
    console.log("Passou!");
}; 

//não existe um limite para a quantidade de 'ands' em uma mesma sentença condicional

if((1 == 1 && 3 > 3) && true){ //operações podem ser separadas por () para terem prioridade na execução do bloco
    console.log("Passou!");
} else if(nome == "Caio" && idade >= 14){
    console.log("Aqui passa!");
}; 