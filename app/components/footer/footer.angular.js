( function()
{
  "use strict";
    
  angular
    .module( ':App' )
    .directive( 'footer', footer )
    .controller( 'FooterController',footerController );
    
  function footer()
  {
    return{
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      controller: 'FooterController',
      controllerAs: 'footerCT'
    }
  };
  
  function footerController()
  {
    var i = this;
    
    i.active = '';
    i.select = select;
    
    function select( icon )
    { 
      if( i.active === icon )
      { i.active = ''; }
      
      else
      { i.active = icon; }
    }
  };
    
})();