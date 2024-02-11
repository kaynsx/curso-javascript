document.write("Abra o console!");

var nome = "Caio";

if(nome == "Isi"){
    console.log("O nome dele é Isi!");
} else if(nome == "Caio"){
    console.log("O nome dele é Caio!");
} else{
    console.log("Ele possui outro nome!");
}; //declaração de um bloco 'if e else' com um 'else if'

//'else if' obrigatoriamente aparece depois de um 'if' e antes de um 'else' (pode existir mais de um no mesmo bloco)
//nem sempre o 'else' é necessário, vai depender da funcionalidade do programa

var idade = 19

if(idade > 20){
    console.log("Ele pode entrar na festa!");
} else if(idade >= 18){
    console.log("Ele só pode entrar com autorização!");
}; //'else' não é obrigatório para fechar um bloco

if(nome == "Isi"){
    console.log("Teste!");
} else{
    console.log("Testando!");
};

//as três estruturas são possíveis para criação de um bloco, a única obrigatoriedade é começar com um 'if'