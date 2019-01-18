(function(DOM) {
  'use strict';

  function app() {
    return {
      init: function init() {
        console.log('app init');

        this.companyInfo();
      },

      companyInfo: function companyInfo() {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', '/company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
      },

      getCompanyInfo: function getCompanyInfo() {
        if(!app().isReady.call(this)) {
          return;
        }

        var data = JSON.parse(this.responseText);
        var $companyName = new DOM('[data-js="company-name"]');
        var $companyPhone = new DOM('[data-js="company-phone"]');
        $companyName.get()[0].textContent = data.name;
        $companyPhone.get()[0].textContent = data.phone;
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      }
    }
  };

  app().init();

})(window.DOM);
