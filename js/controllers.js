angular.module('libreriaApp.controllers', []).

    //CONTROLADOR DE LAS NOVEDADES
    controller('novedadesCtrl', function($scope, libreriaAPIservice) {

        activarMenuOption("novedades");
        
        $scope.novedades = [];

        //OBTIENE SOLO LAS NOVEDADES DE ENTRE TODOS LOS LIBROS
        libreriaAPIservice.getNovedades().success(function (response) {
            for (var i=0; i <= response.libros.length; i++){
                if(response.libros[i].novedad==true){
                  $scope.novedades.push(response.libros[i]);
                }
            }
        });

        $scope.getTimes = function(n){
            return new Array(n);
        };

        $scope.muestraNovedad = function(libroId) {
            $scope.total = 0;
            for (var i=0; i<=$scope.novedades.length; i++){
                if($scope.novedades[i].id==libroId){
                    $scope.libro = $scope.novedades[i];
                    break;
                }
            }
        };
    }).


    //CONTROLADOR DE LA SECCION LIBROS
    controller('librosCtrl', function($scope, libreriaAPIservice) {

        activarMenuOption("libros");

        $scope.libros = [];

        libreriaAPIservice.getLibros().success(function (response) {
            $scope.libros = response.libros;
        });

        $scope.muestraLibro = function(libroId) {

            $scope.total = 0;
            for (var i=0; i<=$scope.libros.length; i++){
                if($scope.libros[i].id==libroId){
                    $scope.libro = $scope.libros[i];
                    break;
                }
            }
        };
    }).

    //CONTROLADOR DE LA SECCION CLIENTES
    controller('clientesCtrl', function($scope, libreriaAPIservice) {

        activarMenuOption("clientes");

        $scope.clientes = [];
        $scope.seccionClientes = {total: 0};

        libreriaAPIservice.getClientes().success(function (response) {
                $scope.clientes = response.clientes;
        });

        $scope.muestraCliente = function(clienteId) {
            $scope.total = 0;
            for (var i=0; i<=$scope.clientes.length; i++){
                if($scope.clientes[i].id==clienteId){
                    $scope.cliente = $scope.clientes[i];
                    break;
                }
            }
        };
    });
