(function() {
  'use strict';

  /*
  1. Envolva todo o conteúdo desse desafio em uma IIFE.
  2. Adicione a diretiva 'use strict';
  3. Crie um arquivo index.html e adicione esse script à ele.
  */

  /*
  Declare uma variável chamada `name` que receba seu primeiro nome.
  Mostre no console todas as letras do seu nome separadas, com a frase:
  - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
  Ex: no caso do nome ser "Fernando", deve mostrar as frases:
  - "F é a 1ª letra do meu nome."
  - "e é a 2ª letra do meu nome."
  E assim por diante, até a última.
  */
  console.log( 'As letras do seu nome:' );
  let name = "Diego";

  for (let i = 0, len = name.length; i < len; i++) {
    console.log( `${name[i]} é a ${i+1}ª letra do meu nome` );
  }

  /*
  - Declare uma variável chamada `fullName`, que receba seu nome completo,
  escrito no formato de slug (caixa baixa e palavras separadas por um traço).
  Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
  - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
  por um espaço.
  - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
  nome, então fique à vontade para usar as artimanhas que já viu até agora no
  curso para fazer isso funcionar corretamente :)
  - Mostre no console o nome no formato slug, e o resultado final. Use um
  console.log para cada formato.
  */
  console.log( '\nNome convertido à partir de um slug:' );
  let fullName = 'diego-pereira-tavares';
  let fullNameShow = '';

  // fullName = fullName.split('-');
  // for (let i = 0, len = fullName.length; i < len; i++) {
  //   fullNameShow += fullName[i][0].toUpperCase() + fullName[i].slice(1) + ' ';
  // }

  fullNameShow = fullName.split('-').map(function (name) {
    return name[0].toUpperCase() + name.slice(1);
  }).join(' ');

  console.log(fullNameShow);

  /*
  - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
  cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
  ser um "e". No final, concatene com a frase: " são meus amigos.".
  O resultado final deve ficar mais ou menos assim:
  - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
  - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
  5 nomes foi somente uma sugestão ;)
  */
  console.log( '\nMeus amigos:' );
  let arrFriends = ['Jose', 'João', 'Judas', 'Pedro', 'Paulo'];
  let msgFriends = '';

  // for ( var i = 0, len = arrFriends.length; i < len; i++) {
  //   msgFriends += arrFriends[i].concat( (arrFriends.length - 1) !== i ? ', ' : ' e');
  // }

  msgFriends = arrFriends.reduce(function (allFriends, current, index) {
    let separator = (arrFriends.length - 1 ===  index) ? ' e ' : ', ';
    return allFriends + separator + current;
  }).concat(' são meus amigos.');
  console.log(msgFriends);

  /*
  Usando o replace(), faça a string "Roberto" virar "Roberta".
  Mostre o resultado no console.
  */
  console.log( '\nEra "Roberto", agora é:' );
  let nameChange = 'Roberto';
  // nameChange = nameChange.slice(0,nameChange.length-1)+nameChange[nameChange.length - 1].replace('o','a')
  // console.log( nameChange );
  console.log( nameChange.replace('to','ta') );

  /*
  Mostre no console a parte "nando" da string "Fernando". Use o método que
  faz a busca do final para o início da string.
  */
  console.log( '\nParte de uma string:' );
  console.log('Fernando'.substring(8,3));

  /*
  Declare uma variável chamada `myName`, que receba o seu primeiro nome,
  escrito de forma natural.
  Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
  e minúsculas.
  - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
  de qualquer tamanho, escrito de qualquer forma.
  Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
  */
  console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
  let myName = 'Diego';
  let myNameChanged = [];

  for (let i = 0, len = myName.length; i < len; i++) {
    // myNameChanged += ( (i % 2 === 0) ? myName[i].toLowerCase() : myName[i].toUpperCase() );
    myNameChanged.push( (i % 2 === 0) ? myName[i].toLowerCase() : myName[i].toUpperCase() );
  }

  // console.log(myNameChanged);
  console.log(myNameChanged.join( '' ));
})();
