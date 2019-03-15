(() => {
  'use strict';
  const app = angular.module('app');
  app.component('homeTop1', {
    bindings: {
      brand: '<'
    },
    templateUrl: 'http://localhost/myweb/js/components/home/top1Component.html',

  });
})();
