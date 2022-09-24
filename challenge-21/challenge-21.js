(function(window, document) {
  /*
  O desafio de hoje será um pequeno projeto: um cronômetro!
  As regras para criação do cronômetro são as seguintes:
  1. Crie um arquivo index.html e adicione esse script a ele;
  2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
  Ele será o nosso cronômetro;
  3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
  4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
  cada segundo;
  5. Ao clicar em Stop, o cronômetro deve parar de contar;
  6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

  Utilize o atributo data-js para nomear o campo e os botões. Você pode
  usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
  dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
  */
  'use strict';

  const $inputTimer = document.querySelector('[data-js="inputTimer');
  const $btnStart = document.querySelector('[data-js="btnStart"]');
  const $btnStop = document.querySelector('[data-js="btnStop"]');
  const $btnReset = document.querySelector('[data-js="btnReset"]');

  let temp;

  function startTimer() {
    $inputTimer.value = Number($inputTimer.value) + 1;
    // $inputTimer.value = +$inputTimer.value + 1;

    // previne adicionar vários timeouts do cronometro, o que adicionaria mais
    // velocidade caso que mais de uma vez no btnStart
    clearTimeout(temp);

    //adiciona +1 a cada 1segundo
    temp = setTimeout(startTimer, 1000);
  };

  function stopTimer() {
    clearTimeout(temp);
  };

  function resetTimer() {
    stopTimer();
    $inputTimer.value = 0;
  };


  $btnStart.addEventListener('click', startTimer, false);
  $btnStop.addEventListener('click', stopTimer, false);
  $btnReset.addEventListener('click', resetTimer, false);

})(window, document);
