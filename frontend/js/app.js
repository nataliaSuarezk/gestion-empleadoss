angular.module("gestionEmpleadosApp", [])
    .controller("empleadoController", ["$scope", "$http", function ($scope, $http) {
        $scope.empleados = [];
        $scope.empleado = {};


        $scope.cargarEmpleados = function () {
            $http.get("https://gestion-empleados.onrender.com/api/empleados")
                .then(function (response) {
                    $scope.empleados = response.data;
                }, function (error) {
                    console.error("Error al cargar empleados", error);
                });
        };


        $scope.guardarEmpleado = function () {
            if ($scope.empleado._id) {
                $http.put("http://localhost:3000/api/empleados/" + $scope.empleado._id, $scope.empleado)
                    .then(function (response) {
                        $scope.cargarEmpleados();
                        $scope.limpiarFormulario();
                        console.log(response.data.message)

                    }, function (error) {
                        console.error("error al actualizar: ", error);
                    });
            } else {
                $http.post("http://localhost:3000/api/empleados", $scope.empleado)
                    .then(function (response) {
                        $scope.cargarEmpleados();
                        $scope.limpiarFormulario();
                        console.log(response.data.message);

                    }, function (error) {
                        console.error("error al crear", error);
                    });
            }

        };

        $scope.editarEmpleado = function (empleado) {
            $scope.empleado = angular.copy(empleado);
        };



        $scope.eliminarEmpleado = function (id) {
            $http.delete("http://localhost:3000/api/empleados/" + id)
                .then(function (response) {
                    $scope.cargarEmpleados();
                    console.log(response.data.message);

                }, function (error) {
                    console.error("error al eliminar", error);
                });
        };

        $scope.limpiarFormulario = function () {
            $scope.empleado = {};
        };

        $scope.cargarEmpleados();
    }]);