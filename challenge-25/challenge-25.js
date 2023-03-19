(function () {
  "use strict";
  /*
  Essa semana você terá dois desafios:
  1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
  tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
  ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
  o que não ficou tão claro das aulas anteriores.
  É essencial que você entenda todo o conteúdo que foi passado até aqui,
  para que possamos prosseguir para a parte mais avançada do curso :D

  2) Estudar eventos!
  Acesse a página do MDN:
  https://developer.mozilla.org/en-US/docs/Web/Events#Categories

  Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
  desafio os experimentos legais que você conseguir desenvolver :D
  */

  function on(elem, evt, callback) {
    document.querySelector(elem)
      .addEventListener(evt, callback, false);
  };
  function off(elem, evt, callback) {
    document.querySelector(elem)
      .removeEventListener(evt, callback, false);
  };

  function handClick(evt){
    evt.preventDefault();
    alert("Link clicked fs 1");
  }

  function handClick2(evt){
    evt.preventDefault();
    alert("Link clicked fs 2");
  }

  on('[data-js="link]', 'click', handClick);
  on('[data-js="link]', 'click', handClick2);

  //no caso de precisar retirar um evento da lista
  //de execução da página utiliza-se o removeEventListener
  off('[data-js="link]', 'click', handClick);
  // off('[data-js="link]', 'click', handClick2);

})();
