angular.module("app", []).controller("ctrl1", ctrl1).controller("ctrl2", ctrl2);
function ctrl1($scope,$http) {
	$scope.name = "controller 1";
	$scope.num = 4;
	$scope.search = "walla";
	$scope.showSearch = function() {
		var newData = {	}
		
		newData.name=$scope.mySite;
		newData.path = $scope.myPath;
		$scope.sites.push(newData)
	}
	$scope.sites = [{
		name : 'Walla',
		path : "http://walla.co.il"
	}, {
		name : 'Sport5',
		path : "http://sport5.co.il"
	}, {
		name : 'Ynet',
		path : "http://www.ynet.co.il/"

	}, {
		name : 'angularjs',
		path : "https://angularjs.org/"
	}];

}

function ctrl2($scope) {

	$scope.name = "controller 2"

}

