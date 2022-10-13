(function(window, document) {
  /*
  Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades
  `name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.
  */

  let person1 = {
    name: 'João',
    lastName: 'do Brasil'
  };

  let person2 = {
    name: 'Maria',
    lastName: 'do Brasil'
  };


  /*
  Agora crie uma função chamada `getFullName` que retorne as propriedades
  `name` e `lastName` dos objetos acima, formando um nome completo.
  A função não deve receber nenhum parâmetro, mas as propriedades `name` e
  `lastName` devem ser dinâmicas.
  A mesma função deve servir para as duas pessoas (ou qualquer outra que for
  criada).
  Depois disso, invoque essa função, mostrando no console o nome completo das
  pessoas que foram criadas anteriormente, passando as pessoas acima como
  contexto da função. Use um console.log por pessoa.
  */
  console.log( 'O nome das pessoas é:' );

  function getFullName() {
    return `${this.name} ${this.lastName}`;
  }

  /* utilizado o .call para passar o objeto person1 e person2 como contexto
   e para ser utilizado no this */
  console.log( getFullName.call( person1 ) );
  console.log( getFullName.call( person2 ) );

  /*
  Crie uma função chamada `sum`. Essa função pode receber uma lista de
  parâmetros variável, e deverá retornar a soma de todos eles.
  Não use estruturas de repetição para somar os argumentos.
  Na primeira linha, dentro da função, deixe um console.log para mostrar todos
  os parâmetros passados para essa função.
  */
  function sum() {
    console.log( arguments );
    // array like de arguments por isso o uso de Array.prototype
    return Array.prototype.reduce.call( arguments, function ( result, actual ) {
      // return result + actual;

      // utilizado o "+" antes de cada var para converter o valor número
      return (+result) + (+actual);
      // return Number(result) + Number(actual);
    });
  }

  console.log( sum(1,2,3,4,'5') );


  /*
  Mostre no console que a função acima funciona, invocando-a em 3 console.log
  diferentes, com quantidades variáveis de parâmetros passados.
  */
  console.log( '\nSomar alguns números:' );
  console.log( sum(1,2,3) );
  console.log( sum(1,2) );
  console.log( sum(4,5,6) );


  /*
  Declare uma variável chamada `userEntry`, que irá receber alguns valores
  entrados pelo usuário. Mostre para o usuário a seguinte frase:
  "Entre com alguns números que serão somados:"
  */
  let userEntry = prompt('Entre com alguns números que serão somados:');

  /*
  Mostre no console o valor entrado pelo usuário:
  */
  console.log( '\nEntrada do usuário:' );
  console.log( userEntry );

  /*
  Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string
  e remove tudo o que não for número, retornando um array somente com os números
  da string. Mostre a representação em string dessa função no console.
  */
  console.log( '\nFunção que limpa entrada do usuário (somente números):' );
  function justNumbers( numbers) {
    // split() para retornar um array
    return numbers.replace(/\D+/g, ',').split(',');
  }
  console.log ( justNumbers );

  /*
  Usando a função acima, faça a limpeza dos valores entrados pelo usuário,
  atribuindo o resultado à uma variável `numbers`.
  */
  console.log( '\nEntrada do usuário limpa. Somente números:' );
  let numbers = justNumbers(userEntry)
  console.log( numbers );

  /*
  Agora com o array de números, utilize a função `sum` para somar todos os
  números desse array e mostre o resultado no console.
  */
  console.log( '\nSomar números entrados pelo usuário:' );

  // função sum recebe os arguments com numeros para somar
  // é utilizado o apply para enviar a mesma função como this
  console.log( sum.apply(sum, numbers) );

})(window, document);
