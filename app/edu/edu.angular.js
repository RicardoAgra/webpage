( function()
{
  "use strict";
  
  angular
    .module( ':App' )
    .controller( 'EduController',[ '$state', eduController ] );
  
  function eduController( $state )
  {
    var i = this;
    
    i.open = open;
    i.back = back;
    
    function open( event )
    {
      $state.go( 'edu.views',{ event: event } );
    }
    
    function back()
    {
      $state.go( 'edu' );
    }
  };
  
})();