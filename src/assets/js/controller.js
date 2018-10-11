
app.controller('mainCtrl', ['$scope', 'mainSvc', function($scope, mainSvc){

$scope.entries = [];
$scope.valid = false;

$scope.add = function () {
  $scope.entries.push({nombre: $scope.nombre, rut: $scope.rut, nacionalidad: $scope.nacionalidad});
};

$scope.delete = function (index) {
  $scope.entries.splice(index, 1);
};

$scope.validaRut = function () {
  console.log(mainSvc.isRut($scope.rut));
  $scope.valid = mainSvc.isRut($scope.rut);
};

}]);
