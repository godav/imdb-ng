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
	}, {
		f_name : 'Anne',
		l_name : 'Hathaway',
		photo : "http://ia.media-imdb.com/images/M/MV5BNjQ5MTAxMDc5OF5BMl5BanBnXkFtZTcwOTI0OTE4OA@@._V1_UY317_CR1,0,214,317_AL_.jpg",
		id : 5,
		selected : false,
		link : false
	}, {
		f_name : 'Amy',
		l_name : 'Adams',
		photo : "http://ia.media-imdb.com/images/M/MV5BMjE4NjExMjI1OF5BMl5BanBnXkFtZTcwODc0MjY2OQ@@._V1_UX214_CR0,0,214,317_AL_.jpg",
		id : 6,
		selected : false,
		link : false
	}, {
		f_name : 'Matthew',
		l_name : 'McConaughey',
		photo : "http://ia.media-imdb.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
		id : 7,
		selected : false,
		link : false,
	}, {
		f_name : 'Leonardo',
		l_name : 'DiCaprio',
		photo : "http://ia.media-imdb.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg",
		id : 8,
		selected : false,
		link : false
	}
	];
 
}

function ctrl2($scope) {

	$scope.name = "controller 2"

}

