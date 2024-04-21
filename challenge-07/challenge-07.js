/*
Crie um array com 5 items (tipos variados).
*/
var myArray = ['Tavares', 38, {car:'HB20', year:2014}, true, function me(){ return 'I am Dev'}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem (add) {
  myArray.push(add);
  return myArray;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log( addItem(['Matheus', 7, {moto:'Yamaha', year:2022}]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento desse último array é ${myArray[5][1]}`);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${myArray.length} itens.`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${myArray[5].length} itens.`);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var i = 10;
while (i <= 20) {
  // if (i % 2 === 0){
  //   console.log(i);
  // }
  i % 2 === 0 ? console.log(i) : '';

  i++;
}


/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var i = 10;
while (i < 20) {
  // if (i % 2 !== 0){
  //   console.log(i);
  // }
  i % 2 !== 0 ? console.log(i) : '';

  i++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for (var j=100; j <= 120; j++) {
  j % 2 === 0 ? console.log(j) : '';
}

console.log( 'Números ímpares entre 111 e 125:' );
for (var ji=111; ji <= 125; ji++) {
  ji % 2 !== 0 ? console.log(ji) : '';
}
