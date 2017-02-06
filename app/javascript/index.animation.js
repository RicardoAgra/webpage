( function()
{
  "use strict"
  
  function log( string ){ console.log( string ); }
  
  document
    .getElementById( 'about' )
    .addEventListener( 'click', iconFocus );
  
  function iconFocus()
  {
    if( this.getAttribute( 'hasFocus' ) )
  }
  
})();