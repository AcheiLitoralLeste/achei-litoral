!function(a){"use strict";(function o(){return{init:function(){console.log("app init"),this.companyInfo()},companyInfo:function(){var n=new XMLHttpRequest;n.open("GET","/company.json",!0),n.send(),n.addEventListener("readystatechange",this.getCompanyInfo,!1)},getCompanyInfo:function(){if(o().isReady.call(this)){var n=JSON.parse(this.responseText),t=new a('[data-js="company-name"]'),e=new a('[data-js="company-phone"]');t.get()[0].textContent=n.name,e.get()[0].textContent=n.phone}},isReady:function(){return 4===this.readyState&&200===this.status}}})().init()}(window.DOM);