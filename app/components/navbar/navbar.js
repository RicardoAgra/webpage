( function()
{
  "use strict";

  var isVisible = false;
  var dropdown = document.getElementById( 'dropdown' );
  var dropdown_items = document.getElementById( 'dropdown-items' );
  
  dropdown.addEventListener( 'click', function()
  {    
    if( isVisible )
    { dropdown_items.style.height = '0px'; }
    
    else
    { dropdown_items.style.height = '300px'; }
    
    isVisible = !isVisible;
  });
    
})();