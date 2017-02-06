( function()
{
  "use strict";
  
  angular
    .module( ':App' )
    .controller( 'HomeController',[ '$state',homeController ] );

  function homeController( $state )
  {
    var i=this;
    
    i.active = '';
    i.select = select;
    i.open = open;
    
    function select( icon_name )
    {
      if( i.icon === icon_name )
      { return; }
      
      else
      {
        i.active = icon_name;
        $state.go( 'home.view',{ view: icon_name } );
      }
    }
    
    function open()
    { 
      if( i.active === "about" )
      { $state.go( 'about.view',{ view: 'info' } ); }
      
      else
      {
        if( i.active )
        { $state.go( i.active ); }
      }
    }
  };
  
})();