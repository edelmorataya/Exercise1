angular.module ('angularapp', ["ui.router"] );

var config = function ($stateProvider, $locationProvider, $urlRouterProvider){
  let states = [{
    name: 'app',
    options: {
        url: '/app',
        abstract: true,
        templateUrl: 'app/app.html',
        controller: 'AppController',
        controllerAs: 'vm'
    }
  },{
      name: 'app.carrousel',
      options: {
          url: '/carrousel',
          templateUrl: 'app/js/controllers/carrousel/carrousel.html',
          controller: 'CarrouselController',
          controllerAs: 'vm'
      }

  }];

};
