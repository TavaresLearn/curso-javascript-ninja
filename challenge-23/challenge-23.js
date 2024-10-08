(function (window, document) {
  "use strict";
  /*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

  const $calcVisor = document.querySelector('[data-js="calc"]');
  const $calcBtnNumber = document.querySelectorAll('[data-js="btn-number"]');
  const $allOperations = ["+", "-", "x", "÷"];

  //botoes de operações
  const $calcBtnOperAll = document.querySelectorAll('[data-js="btn-oper"]');
  const $calcBtnEq = document.querySelector('[data-js="btn-oper-eq"]');
  const $calcBtnCe = document.querySelector('[data-js="btn-oper-ce"]');

  /*
  A API DOM recebeu algumas atualizações, e uma delas foi o método `forEach`
  para o objeto NodeList. Então não precisamos mais usar o
  `Array.prototype.forEach` para transformar a NodeList em um array =)
  */

  // Adiciona evento para o array de botoes criado a partir da seleção dos
  //elementos do DOM
  $calcBtnNumber.forEach(function (btn) {
    btn.addEventListener("click", handleClickBtnNumber, false);
  });

  //array btn operators
  $calcBtnOperAll.forEach(function (btn) {
    btn.addEventListener("click", handleClickBtnOperator, false);
  });

  //btn operator ce
  $calcBtnCe.addEventListener("click", handleClickBtnCe, false);

  //btn operator eq
  $calcBtnEq.addEventListener("click", handleClickBtnEq, false);

  function handleClickBtnNumber() {
    $calcVisor.value += this.value;
  }

  function handleClickBtnCe() {
    $calcVisor.value = 0;
  }

  function handleClickBtnOperator() {
    $calcVisor.value = removeLastCharIfOperator($calcVisor.value);
    $calcVisor.value += this.value;
  }

  function removeLastCharIfOperator(char) {
    if (isLastCharOperator(char)) {
      return char.slice(0, -1);
    }
    return char;
  }

  //Se o último caractere no input já for um símbolo de alguma
  //operação, esse caractere deve ser substituído pelo último pressionado
  function isLastCharOperator(char) {
    let lastChar = char.split("").pop();
    return $allOperations.some(function (operator) {
      return operator === lastChar;
    });
  }

  function handleClickBtnEq() {
    let allCharsVisor;

    $calcVisor.value = removeLastCharIfOperator($calcVisor.value);
    allCharsVisor = $calcVisor.value.match(/\d+[+x÷-]?/g);
    $calcVisor.value = allCharsVisor.reduce(function (accumulated, actual) {
      let firstValue = accumulated.slice(0, -1);
      let operator = accumulated.split("").pop();
      let lastValue = removeLastCharIfOperator(actual);
      let lastOperator = isLastCharOperator(actual)
        ? actual.split("").pop()
        : "";

      switch (operator) {
        case "+":
          return Number(firstValue) + Number(lastValue) + lastOperator;

        case "-":
          return Number(firstValue) - Number(lastValue) + lastOperator;

        case "x":
          return Number(firstValue) * Number(lastValue) + lastOperator;

        case "÷":
          return Number(firstValue) / Number(lastValue) + lastOperator;
      }
    });
  }
})(window, document);
