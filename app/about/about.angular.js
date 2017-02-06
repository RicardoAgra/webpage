( function()
{
  "use strict";
  
  angular
    .module( ':App' )
    .controller( 'AboutController',[ '$state',aboutController ] );
  
  function aboutController( $state )
  {
    var i = this;
    
    i.active = '';
    i.lang = '';
    i.select = select;
    i.selectLang = selectLang;
    
    function select( tab_name )
    {
      if( i.icon === tab_name )
      { return; }
      
      else
      {
        i.active = tab_name;
        $state.go( 'about.view',{ view: tab_name } );
      }
    }
    
    function selectLang( language )
    {
      if( i.lang === language )
      { return; }
      
      else
      {
        i.lang = language;
        $state.go( 'about.view.lang',{ lang: language } );
      }
    }
  };
  
})();