(() => {
  'use strict';

  const app = angular.module('app');

  app.component('menuBar', {
    // defines a two way binding in and out of the component
    bindings: {
      brand: '<'
    },
    // Pulls in out template
	
    // templateUrl: '/js/components/appComponent.html',
    templateUrl: 'https://hoanzh88.github.io/js/components/include/navigationComponent.html',

  });
})();
