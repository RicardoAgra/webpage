( function()
{
  "use strict";
  
  angular
    .module( ':App' )
    .controller( 'SkillsController',[ '$state',skillsController ] );
  
  function skillsController( $state )
  {
    var i = this;
    
    i.open = open;
    
    function open( index )
    {      
      $state.go( 'slider',{ slide: index } );
    }
  };
  
})();