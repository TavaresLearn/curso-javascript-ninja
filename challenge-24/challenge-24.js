
(function (window, document) {
  "use strict";/*
  Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
  o código, conforme vimos na aula anterior. Quebrar as responsabilidades
  em funções, onde cada função faça somente uma única coisa, e faça bem feito.

  - Remova as duplicações de código;
  - agrupe os códigos que estão soltos em funções (declarações de variáveis,
  listeners de eventos, etc);
  - faça refactories para melhorar esse código, mas de forma que o mantenha com a
  mesma funcionalidade.
  */

  const $visor = document.querySelector('[data-js="visor"]');
  const $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
  const $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
  const $buttonCE = document.querySelector('[data-js="button-ce"]');
  const $buttonEqual = document.querySelector('[data-js="button-equal"]');

  function initButtons() {
    $buttonsNumbers.forEach(function(button) {
      button.addEventListener('click', handleClickNumber, false);
    });
    $buttonsOperations.forEach(function(button) {
      button.addEventListener('click', handleClickOperation, false);
    });
    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonEqual.addEventListener('click', handleClickEqual, false);
  }

  function initAll() {
    initButtons();
  }

  function handleClickNumber() {
    $visor.value += this.value;
  }

  function handleClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;
  }

  function handleClickCE() {
    $visor.value = 0;
  }

  function getOperations() {
    return Array.prototype.map.call($buttonsOperations, function(btn) {
      return btn.value;
    });
  }

  function isLastItemAnOperation(number) {
    let lastItem = number.split('').pop();
    let operations = getOperations();
    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  function removeLastItemIfItIsAnOperator(number) {
    if(isLastItemAnOperation(number))
      return number.slice(0, -1);
    return number;
  }

  function getRegexOperations() {
    return new RegExp('\\d+['+ getOperations().join('') +']?','g');
  }

  function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    let allValues = $visor.value.match(getRegexOperations());
    // função é passada sem execução "calcAllValues()" pois reduce já espera uma function
    // se fosse passado uma função executando o que iria ser recebido pelo reduce seria o retorno da mesma
    // no caso o numero
    $visor.value = allValues.reduce(calcAllValues);
  }



  function calcAllValues(accumulated, actual) {
    let firstValue = accumulated.slice(0, -1);
    let operator = accumulated.split('').pop();
    let lastValue = removeLastItemIfItIsAnOperator(actual);
    let lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
    return doOperation(operator, firstValue, lastValue, lastOperator) + lastOperator;
  }

  function doOperation(operator, firstValue, lastValue) {
    switch(operator) {
      case '+':
        return Number(firstValue) + Number(lastValue);
      case '-':
        return Number(firstValue) - Number(lastValue);
      case 'x':
        return Number(firstValue) * Number(lastValue);
      case '÷':
        return Number(firstValue) / Number(lastValue);
    }
  }

  initAll();
})(window, document);
