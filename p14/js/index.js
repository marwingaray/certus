let app = angular.module("MyApp", []);

app.controller("formCtrl", function ($scope) {
    $scope.horas
    $scope.codigo
    $scope.tarifa
    $scope.bruto
    $scope.descuento = 0;
    $scope.neto = 0;
    $scope.calcular = function () {
        $scope.bruto = $scope.horas * $scope.tarifa
        if($scope.bruto <= 500){
            $scope.neto = $scope.neto;
        }else if($scope.bruto <= 1000){
            $scope.descuento = $scope.bruto * 0.02;
            $scope.neto = $scope.bruto - $scope.descuento;
        }else if($scope.bruto <= 4000){
            $scope.descuento = $scope.bruto * 0.08;
            $scope.neto = $scope.bruto - $scope.descuento;
        }else if($scope.bruto <= 8000){
            $scope.descuento = $scope.bruto * 0.15;
            $scope.neto = $scope.bruto - $scope.descuento;
        }else if($scope.bruto <= 10000){
            $scope.descuento = $scope.bruto * 0.21;
            $scope.neto = $scope.bruto - $scope.descuento;
        }else if($scope.bruto > 10000){
            $scope.descuento = $scope.bruto * 0.3;
            $scope.neto = $scope.bruto - $scope.descuento;
        }
        $scope.descuento = $scope.descuento.toFixed(2);
        $scope.neto = $scope.neto.toFixed(2);
  };
  
});