/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = ['Diego Tavares', 39, true, 'M', undefined ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(myArray) {
  return myArray;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunctionP2(myArray, number) {
  return console.log(myArray[number]);
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVarArray = [1000, 'Tavares', false, { obj:2 }, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
 myFunctionP2(myVarArray, 0);
 myFunctionP2(myVarArray, 1);
 myFunctionP2(myVarArray, 2);
 myFunctionP2(myVarArray, 3);
 myFunctionP2(myVarArray, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
  let books = {
    'Livro 1': {
      quantidadePaginas: 100,
      autor: 'Autor 1',
      editora: 'Editora 1'
    },
    'Livro 2': {
      quantidadePaginas: 200,
      autor: 'Autor 2',
      editora: 'Editora 2'
    },
    'Livro 3': {
      quantidadePaginas: 300,
      autor: 'Autor 3',
      editora: 'Editora 3'
    }
  }
  if (!bookName) {
    return books;
  }

  return books[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book()) ;

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
let bookName= 'Livro 1';
console.log(`O ${bookName} tem ${book(bookName).quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do ${bookName} é ${book(bookName).autor}.`);


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O ${bookName} foi publicado pela editora ${book(bookName).editora}.`);

