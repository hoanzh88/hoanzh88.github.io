(() => {
  'use strict';
  const app = angular.module('app');
  app.component('footerDiv', {
    bindings: {
      brand: '<'
    },
    templateUrl: 'http://localhost/myweb/js/components/include/footerComponent.html',
    controller: function () {
       
    }
  });
})();
