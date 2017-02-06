( function()
{
  "use strict"
  
  angular
    .module( ':App' )
    .controller( 'CareersController',[ '$state',careersController ] );
  
  function careersController( $state )
  {    
    var i = this;
    i.active = '';
    i.select = select;
    
    function select( career )
    {
      if( i.active === career )
      { 
        i.active = 0;
        $state.go( 'careers' );
      }
      
      else
      {
        i.active = career;
        $state.go( 'careers.views',{ career: career } );
      }
    };
  };
  
})();