document.write("Abra o console!");

for(var i = 0; i < 10; i++){ //variávei 'i' = 0 (declaração), enquanto 'i' for menor que 10 (condição), adicione o valor 1 na variável (incremento)
    console.log("Repetindo for: " + i + "!");
}; //declaração de um bloco 'for'

var arr = [1, 2, 3, 4];

for(var j = 0; j < arr.length; j++){ //enquanto 'j' for menor que a quantidade de indíces no 'array' (condição)
    console.log(arr[j]);
};

for(var x = 5; x < 100; x *= 3){ //qualque operador de atribuição pode ser usado como incrementador
    console.log(x);
};