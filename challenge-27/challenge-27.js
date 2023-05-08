(function() {
  'use strict';
  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.

  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elmento do DOM, podem
  ser métodos estáticos.

  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false

  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
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

  DOM.prototype.off = function off(evt, callback){
    this.element.forEach(function(item){
      item.removeEventListener(evt, callback, false);
      console.log('removido o evento de click');
    });
  };

  DOM.prototype.get = function get(){
    return this.element;
  };

  DOM.prototype.forEach = function forEach(){
    // return this.element.forEach.apply(this.element, arguments);
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map(){
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter(){
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce(){
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight(){
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every(){
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some(){
    return Array.prototype.some.apply(this.element, arguments);
  };

  // métodos estáticos (sem utilizar o prototype)
  DOM.isArray = function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]';
  };

  DOM.isObject = function isObject(param) {
    return Object.prototype.toString.call(param) === '[object Object]';
  };

  DOM.isFunction = function isFunction(param) {
    return Object.prototype.toString.call(param) === '[object Function]';
  };

  DOM.isNumber = function isNumber(param) {
    return Object.prototype.toString.call(param) === '[object Number]';
  };

  DOM.isString = function isString(param) {
    return Object.prototype.toString.call(param) === '[object String]';
  };

  DOM.isBoolean = function isBoolean(param) {
    return Object.prototype.toString.call(param) === '[object Boolean]';
  };

  DOM.isNull = function isNull(param) {
    return Object.prototype.toString.call(param) === '[object Undefined]'
        || Object.prototype.toString.call(param) === '[object Null]';
  };

  const $itemLink = new DOM('[data-js="item-link"]');

  console.log(DOM.isArray([1, 2, 3])); // true
  console.log(DOM.isFunction(function() {})); // true
  console.log(DOM.isNumber('numero')); // false
  console.log(DOM.isString('numero')); // true
  console.log(DOM.isBoolean(false)); // true
  console.log(DOM.isNull());

  console.log($itemLink);

  const dataJs = $itemLink.map(function(item) {
    return item.getAttribute('data-js');
  });

  console.table(dataJs);
})();
