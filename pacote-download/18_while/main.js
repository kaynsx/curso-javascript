document.write("Abra o console!");

var x = 0;

while(x < 5){ //se repetirá enquanto a variável 'x' for menor q 5
    console.log("Testando repetição " + x + "!");
    x++; //adiciona o valor 1 na variável 'x' toda vez que é executado (incrementador para sair da condição de looping infinito)
}; //declaração de um bloco 'while'

var arr = ['Teste!', 'Testando!', 'A!', 'B!'];
var y = 0;

while(y <= 3){
    console.log(arr[y]); //acessa o índice na array que seja igual a variável 'y'
    y++;
};

var palavra = "Caio";
var i = 0;

while(i <= 3){
    console.log(palavra[i]); //acessa os caracteres da variável 'palavra' que sejam iguais ao valor da variável 'i'
    i+= 1; //incrementador
};