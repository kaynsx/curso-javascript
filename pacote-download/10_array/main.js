document.write("Abra o console!");

var arr = [5, "Caio", true, {teste: 1, teste: 2}]; //declaração de um 'array' 
console.log(arr);

//['array'], {'object'}
//'arrays' aceitam valores de qualquer tipo de dado

var arr2 = [2, 3, 4, 5, 6]; //mas nada impede a declaração de itens com o mesmo tipo de dado (muito mais comum)
console.log(arr2);

console.log(arr[1]); //acessa apenas o segundo item do 'array' (contagem dos itens começa em 0)
console.log(arr2[0]); //acessa apenas o primeiro item do 'array'

arr[4] = 10; //atribuição de item na 'array' no índice 4 (quinto item)
arr[0] = "Teste"; //sobrescrição do item no índice 0 (primeiro item)
console.log(arr);
console.log(typeof arr); //'array' é considerado 'object' em js