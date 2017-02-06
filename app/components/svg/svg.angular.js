( function()
{
  "use strict";
  
  angular
    .module( ':App' )
    .directive( 'svgHome',function()
    { 
      return{ templateUrl: 'app/resources/home.svg' };
    })
    .directive( 'svgMenu',function()
    {
      return{ templateUrl: 'app/resources/menu.svg' };
    })
    .directive( 'svgPhone',function()
    { 
      return{ templateUrl: 'app/resources/phone.svg' };
    })
    .directive( 'svgSkype',function()
    { 
      return{ templateUrl: 'app/resources/skype.svg' };
    })
    .directive( 'svgUser',function()
    {
      return{ templateUrl: 'app/resources/user.svg' };
    })
    .directive( 'svgEdu',function()
    {
      return{ templateUrl: 'app/resources/edu.svg' };
    })
    .directive( 'svgTools',function()
    {
      return{ templateUrl: 'app/resources/tools.svg' };
    })
    .directive( 'svgProfile',function()
    {
      return{ templateUrl: 'app/resources/profile.svg' };
    })
    .directive( 'svgEmail',function()
    {
      return{ templateUrl: 'app/resources/mail.svg' };
    })
    .directive( 'svgLinkedin',function()
    {
      return{ templateUrl: 'app/resources/linkedin.svg' };
    })
    .directive( 'svgHtml',function()
    {
      return{ templateUrl: 'app/resources/html.svg' };
    })
    .directive( 'svgCss',function()
    {
      return{ templateUrl: 'app/resources/css.svg' };
    })
    .directive( 'svgJs',function()
    {
      return{ templateUrl: 'app/resources/js.svg' };
    })
    .directive( 'svgProject',function()
    {
      return{ templateUrl: 'app/resources/project.svg' };
    })
    .directive( 'svgWork',function()
    {
      return{ templateUrl: 'app/resources/work.svg' };
    })
    .directive( 'svgApp',function()
    {
      return{ templateUrl: 'app/resources/app.svg' };
    })
    .directive( 'svgGraduate',function()
    {
      return{ templateUrl: 'app/resources/graduate.svg' };
    })
    .directive( 'svgCancel',function()
    {
      return{ templateUrl: 'app/resources/cancel.svg' };
    });
  
})();