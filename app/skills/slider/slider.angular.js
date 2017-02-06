( function()
{
  "use script";
  
  angular
    .module( ':App' )
    .controller( 'SliderController',[ '$stateParams','$state',sliderController ]);
  
  function sliderController( $stateParams,$state )
  {    
    var i = this;
    
    i.slide = $stateParams.slide;
    i.wraper = document.getElementById( 'wraper' );
    i.slideTo = slideTo;
    i.back = back;
    i.slideRight = slideRight;
    i.slideLeft = slideLeft;
    
    function slideTo( slide )
    {
      var index = slide || i.slide;
      i.wraper.style.marginLeft =( -320 * index )+'px';
    }
    
    function slideRight()
    {
      if( i.slide === 8 )
        return;
      else
      {
        i.slide++;
        slideTo();
      }
    };
    
    function slideLeft()
    {
      if( i.slide === 0 )
        return;
      else
      {
        i.slide--;
        slideTo();
      }
    };
    
    function back()
    {
      $state.go( 'skills' );
    }
  }
  
})();