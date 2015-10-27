angular.module('libreriaApp.services', [])
  .factory('libreriaAPIservice', function($http) {

    var libreriaAPI = {};

    //OBTENEMOS LOS LIBROS
    libreriaAPI.getLibros = function() {
      return $http({
        method: 'GET', 
        url: 'libros.json'
      });
    }

    //OBTENEMOS LAS NOVEDADES
    libreriaAPI.getNovedades = function() {
      return $http({
        method: 'GET', 
        url: 'libros.json'
      });
    }

    //OBTENEMOS LOS CLIENTES
    libreriaAPI.getClientes = function() {
      return $http({
        method: 'GET', 
        url: 'clientes.json'
      });
    }

    return libreriaAPI;
  });