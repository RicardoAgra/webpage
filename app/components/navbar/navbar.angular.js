( function()
{
  "use strict";
  
  angular
    .module( ':App' )
    .directive( 'navBar',navbar )
    .controller( 'NavBarController',[ '$state',navBarController ] );
  
  function navbar() 
  {
    return{ 
      templateUrl: 'app/components/navbar/template.html',
      controller: 'NavBarController',
      controllerAs: 'navbarCT'
    };  
  }
  
  function navBarController( $state )
  {
    var i = this;
    
    i.active = '';
    i.init = init;
    i.open = open;
    i.home = home;
    
    function open( view )
    {
      if( i.active === view )
      { return; }
      
      if( view === "about" )
      {
        i.active = "about";
        $state.go( 'about.view',{ view: 'info' } );
      }
      else
      {
        i.active = view;
        $state.go( view );
      }
    };
  
    function init( view )
    {
      i.active = view;
    }
    
    function home(){ $state.go( 'home.view',{ view: 'welcome' } ); };
    
  };
  
})();