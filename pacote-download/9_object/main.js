document.write("Abra o console!");

var obj = {
    nome: "Caio",
    idade: 17,
    profissao: "Técnico em Desenvolvimento de Sistemas",
    estaTrabalhando: false
}; //declaração de um objeto
console.log(obj);
console.log(typeof obj);

console.log(obj.nome); //acessa uma propriedade do objeto, nesse caso o 'nome'
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é " + obj.nome); //utiliza a propriedade 'nome' como variável

obj.nome = "kAiiN"; //atribuição de valor a propriedade 'nome'
console.log(obj.nome);

obj.graduacao = false; //cria propriedade no objeto
console.log(obj);