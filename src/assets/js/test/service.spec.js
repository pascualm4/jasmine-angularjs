describe('Testing AngularJS Test Suite', function () {

	beforeEach(function () {
		module('jasmineAngularApp');
	});

	describe('Testing AngularJS Service', function () {
		var $service, $scope;

		beforeEach(function () {
			inject(['$service', '$rootScope', function (_$service_, _$rootScope_) {
				$scope = _$rootScope_.$new();
				$service = _$controller_('mainSvc', {'$scope': $scope});
			}]);
		});


		it('validate rut leve', function () {
      expect($scope.isRut('25.806.412-7')).toBeTruthy();
			expect($scope.isRut('25.806.412-')).toBeFalsy();
		});
	});

});
