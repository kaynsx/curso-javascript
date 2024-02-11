document.write("Abra o console!");

var x = 1;
var y = 2;

console.log(x += y); //mesma operação que x = x + y (soma)
console.log(x -= y); //x = x - y (subtração)
console.log(x *= y); //x = x * y (multiplicação)
console.log(x /= y); //x = x / y (divisão)

console.log(x++);
console.log(x--); //mais utilizados em loops

while(x <= 100){
    console.log(x);
    x *= 2; //se repetirá enquanto a variável 'x' for menor ou igual a 100
};

var j = 5;
while(x > 0){
    console.log(x);
    x -= j; //se repetirá enquanto a variável 'x' for maior que 0
};