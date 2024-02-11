document.write("Abra o console!");

if(!true){ 
    console.log("Passou!");
}; //'!' faz o 'true' assumir o valor 'false'

var nome = "Caio";

if(!(nome == "Caio")){
    console.log("Ok!"); //não será executado, já que a condição 'true' assumiu o valor de 'false'
};