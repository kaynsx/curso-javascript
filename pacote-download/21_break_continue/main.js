document.write("Abra o console!");

for(var i = 10; i > 0; i--){
    console.log(i);
    if(i == 5){
        break; //interrompe o 'for' quando o valor da variável 'i' for igual a 5
    }
};
console.log("Deu o break!");

var x = 10;
while(x < 100){
    x += 10;
    if(x == 60 || x == 90){
        console.log("Continue!");
        continue; //passa para a próxima instrução do 'for' 
    }
    console.log("Testando o continue " + x + "!");
};
