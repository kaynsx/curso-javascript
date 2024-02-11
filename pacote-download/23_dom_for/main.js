document.write("Abra o console!");

var lista = ['Laranja', 'Maçã', 'Pêra', 'Jaca', 'Limão'];

var listaUl = document.createElement('ul'); //cria um elemento html 'ul'

var body = document.getElementsByTagName('body'); //acessa todos os elemetos html que possuem a tag 'body'

console.log(body); //exibe a coleção de itens com a tag 'body'
console.log(body[0]); //exibe todo o bloco 'body' 

body[0].appendChild(listaUl); //adiciona o elemento 'ul' no body como um 'elemento filho'

var listaBody = document.getElementsByTagName('ul'); 

console.log(listaBody);
console.log(listaBody[0]);

for(var i = 0; i < lista.length; i++){
    var liFor = document.createElement('li');

    var textoLi = document.createTextNode(lista[i]); //cria um elemento de texto 'node' com base no parâmetro passado ('array lista')

    liFor.appendChild(textoLi);

    console.log(lista[i]);

    listaBody[0].appendChild(liFor);
};