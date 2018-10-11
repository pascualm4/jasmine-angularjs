describe('Testing AngularJS Test Suite', function () {

	beforeEach(function () {
		module('jasmineAngularApp');
	});

	describe('Testing AngularJS Controller', function () {
		var $controller, $scope;

		beforeEach(function () {
			inject(['$controller', '$rootScope', function (_$controller_, _$rootScope_) {
				$scope = _$rootScope_.$new();
				$controller = _$controller_('mainCtrl', {'$scope': $scope});
			}]);
		});

    /*beforeEach(function() {
      jasmine.addMatchers({
        toBeValidRut: function() {
          return {
            compare: function(actual, expected) {
              var result = {};
              result.pass = (actual &gt;=18 &amp;&amp; actual &lt;=35);
              result.message = actual + ' is not valid age for this job';
              return result;
            }
          };
        }
      });
    });*/

		it('should initialize entries in the scope', function () {
      expect($scope.entries.length).toBe(0);
			expect($scope.entries).toBeDefined();
			expect($scope.entries).toEqual([]);
		});

    it('add data to the scope', function () {
      $scope.nombre = 'Pascual';
      $scope.rut = '25.806.412-7';
      $scope.nacionalidad = 'Venezolana';
      $scope.add();

      expect($scope.entries.length).toBe(1);
      expect($scope.entries[0].nombre).toEqual('Pascual');

      $scope.delete(0);

      expect($scope.entries.length).toBe(0);
    });

	});

});
