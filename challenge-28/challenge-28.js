(function() {
  'use strict';
  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  //lib DOM
  function DOM(elem){
    this.element = document.querySelectorAll(elem);
  };

  // extendendo a lib DOM com novos métodos on, off e get
  DOM.prototype.on = function on(evt, callback){
    this.element.forEach(function(item){
      item.addEventListener(evt, callback, false);
    });
  };

  DOM.prototype.get = function get(){
    return this.element;
  };

  DOM.prototype.map = function map(){
    // return Array.prototype.map.apply(this.element, arguments);
    return [...this.element].map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter(){
    // return Array.prototype.filter.apply(this.element, arguments);
    return [...this.element].filter.apply(this.element, arguments);
  };

  const $cep = new DOM('[data-js="cep"]');
  const $form = new DOM('[data-js="form-find-cep"]');
  const $resultMessage = document.querySelector('[data-js="result-message"]');
  const $resultAddress = document.querySelector('[data-js="result-address"]');
  const ajax = new XMLHttpRequest();

  function isJustNumbers(numbers) {
    return numbers.replace(/\D+/g, '');
  }

  function isRequestCepOk() {
    return ajax.readyState === 4 & ajax.status === 200;
  }

  function getUrlCep(){
    return `https://viacep.com.br/ws/${isJustNumbers($cep.get()[0].value)}/json/`;
  }

  function resultRequestCep(){
    return JSON.parse(ajax.responseText || null);
    // let dataRequest;
    // try {
    //   dataRequest = JSON.parse(ajax.responseText);
    // } catch (error) {
    //   dataRequest = null;
    // }
    // return dataRequest;
  }

  function setFieldsForm(){
    let resultCep = resultRequestCep();

    if(resultCep.erro){
      getMessage('error');
      return;
    }

    getMessage('success');
    $resultAddress.innerHTML = `
      <p>
        ${resultCep.logradouro}, ${resultCep.bairro} <br>
        ${resultCep.localidade} - ${resultCep.uf}
      </p>
    `;
  }

  function handleReadyStateChange() {
    getMessage('loading');

    if(isRequestCepOk()){
      setFieldsForm();
    }
  };

  function getMessage(type){
    let cepOnlyNumbers = isJustNumbers($cep.get()[0].value);
    const messages = {
      minLegth: `<small>Cep incorreto:[${cepOnlyNumbers}]</small>`,
      loading: `<small>Buscando informações para o CEP:[${cepOnlyNumbers}]...</small>`,
      error: `<small>Não encontramos o endereço para o CEP:[${cepOnlyNumbers}].</small>`,
      success: `Endereço referente ao CEP:[${cepOnlyNumbers}]`,
    };
    $resultMessage.innerHTML = messages[type];
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    let cepOnlyNumbers = isJustNumbers($cep.get()[0].value);
    let urlRequest = getUrlCep();
    $resultAddress.innerHTML='';

    if (cepOnlyNumbers.length !== 8){
      getMessage('minLegth');
      return;
    }

    ajax.open('GET',urlRequest);
    ajax.send();
    ajax.addEventListener('readystatechange', handleReadyStateChange);
  };

  $form.on('submit', handleSubmitForm);

})();
