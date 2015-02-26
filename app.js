$(document).ready(function(){
  var AppRouter = Backbone.Router.extend({
    routes : {
      "" : "loadHome",
      "home" : "loadHome",
      "page1" : "loadPage1",
      "*actions" : "defaultRoute"
    }
  });
  
  var app_router = new AppRouter();

  app_router.on("route:loadHome", function(){
    $("body").html("<h2>Home Page</h2><a href=\"#page1\">Link to page1</a>");
  });
  
  app_router.on("route:loadPage1", function(){
    $("body").html("<h2>Page One</h2><a href=\"#home\">Link to home page</a>");
  });
  
  app_router.on("route:defaultRoute", function(){
    $("body").html("<h2>Error Page</h2>Not a valid route... <a href=\"#home\">Link to home page</a>");
  });

  Backbone.history.start();

});
