angular.module("app", []).controller("ctrl1", ctrl1).controller("ctrl2", ctrl2);
function ctrl1($scope,$http) {
	$scope.title = "Actors";
	$scope.showSearch = function() {
		var newData = {	}
		
		newData.name=$scope.mySite;
		newData.path = $scope.myPath;
		$scope.sites.push(newData)
	}
	
	
	$scope.sortByFirst = function() {

		$scope.actors.sort(keysrt('f_name'));
	}
	
	$scope.sortByLast = function() {

		$scope.actors.sort(keysrt('l_name'));
	}

	
	
	function keysrt(key,desc) {
  		return function(a,b){
    return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
    }
}
	
	$scope.actors = [{
		f_name : 'Denzel',
		l_name : 'Washington',
		photo : "http://ia.media-imdb.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_UY317_CR12,0,214,317_AL_.jpg",
		id : 1,
		selected : false,
		link : false
	}, {
		f_name : 'Tom',
		l_name : 'Hanks',
		photo : "http://ia.media-imdb.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg",
		id : 2,
		selected : false,
		link : false
	}, {
		f_name : 'Milla',
		l_name : 'Jovovich',
		photo : "http://ia.media-imdb.com/images/M/MV5BNzA1Nzc4NjYwNV5BMl5BanBnXkFtZTcwNjA2NjY1Mg@@._V1_UY317_CR18,0,214,317_AL_.jpg",
		id : 3,
		selected : false,
		link : false

	}, {
		f_name : 'Nicolas',
		l_name : 'Cage',
		photo : "http://ia.media-imdb.com/images/M/MV5BMTUzMDM4Nzk2MV5BMl5BanBnXkFtZTcwNTcwNjExOQ@@._V1_UY317_CR1,0,214,317_AL_.jpg",
		id : 4,
		selected : false,
		link : false
	}];

}

function ctrl2($scope) {

	$scope.name = "controller 2"

}

