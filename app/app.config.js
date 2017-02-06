( function()
{
  "use strict";
  
  angular
    .module( ':App' )
    .config( ['$stateProvider', '$urlRouterProvider', config ] );
  
  function config( $stateProvider,$urlRouterProvider)
  {
    $urlRouterProvider.otherwise( 'home/welcome' );
    
    $stateProvider
      .state( 'home',
      {
        url: '/home',
        templateUrl: 'app/home/template.html'
      })
      .state( 'home.view',
      {
        url: '/:view',
        templateUrl: function( $stateParams )
        { 
          return 'app/home/views/'+ $stateParams.view +'.template.html';
        }
      })
      .state( 'about',
      {
        url: '/about',
        templateUrl: 'app/about/template.html'
      })
      .state( 'about.view',
      {
        url: '/:view',
        templateUrl: function( $stateParams )
        {
          return 'app/about/views/'+ $stateParams.view +'.template.html';
        }
      })
      .state( 'about.view.lang',
      {
        url: '/:lang',
        templateUrl: function( $stateParams )
        {
          return 'app/about/views/lang/'+ $stateParams.lang +'.template.html';
        }
      })
      .state( 'careers',
      {
        url: '/careers',
        templateUrl: 'app/careers/template.html'
      })
      .state( 'careers.views',
      {
        url: '/careers/:career',
        templateUrl: function( $stateParams )
        {
          return 'app/careers/views/'+ $stateParams.career +'.template.html';
        }
      })
      .state( 'edu',
      {
        url: '/edu',
        templateUrl: 'app/edu/template.html'
      })
      .state( 'edu.views',
      {
        url: '/edu/:event',
        templateUrl: function( $stateParams )
        {
          return 'app/edu/views/'+ $stateParams.event +'.template.html';
        }
      })
      .state( 'skills',
      {
        url: '/skillset',
        templateUrl: 'app/skills/template.html'
      })
      .state( 'slider',
      {
        url: '/skillset/slider',
        params: { slide: 0 },
        templateUrl: 'app/skills/slider/template.html'
      });
  };
  
})();