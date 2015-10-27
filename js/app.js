angular.module('libreriaApp', [
  'libreriaApp.services',
  'libreriaApp.controllers',
  'ngRoute'
]).

// Configuracion de las páginas cargadas en el elmento ng-view
config(['$routeProvider', function($routeProvider) {
  $routeProvider.

    // SECCION NOVEDADES
    when("/novedades", {
      templateUrl: "sections/novedades.html",
      controller: "novedadesCtrl"
    }).
    
    // SECCION LIBROS
    when("/libros", {
      templateUrl: "sections/libros.html", 
      controller: "librosCtrl"
    }).
    
    // SECCION CLIENTES
    when("/clientes", {
      templateUrl: "sections/clientes.html", 
      controller: "clientesCtrl"
    }).
    
    //POR DEFECTO
    otherwise({redirectTo: '/novedades'});

}]);