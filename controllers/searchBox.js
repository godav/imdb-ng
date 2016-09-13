
(function(){
	var imdb = angular.module("app");
	
	imdb.controller("searchBox", searchBox)

	function searchBox($scope,$http) {
	$scope.title = "Actors";
	

	
	$scope.getActors = function (){
		var promise = $http.get('http://api.themoviedb.org/3/search/person?api_key=f24727bdb915ca05f7718876104b211d&query=will');
		
		promise.then(successCallback,errorCallback);
		
		function successCallback(response)
		{
			$scope.actors = response.data.results;
			console.log($scope.actors);
		}
		
		function errorCallback(response)
		{
			alert('error');
		}	
	
	}
	
	$scope.actors = $scope.getActors();
	
	$scope.showSearch = function() {
		var newData = {	}
		
		newData.name=$scope.mySite;
		newData.path = $scope.myPath;
		$scope.sites.push(newData)
	}
	
	
	$scope.sortBysortByName = function() {

		$scope.actors.sort(keysrt('name'));
	}
	
	
	
	function keysrt(key,desc) {
  		return function(a,b){
    return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
    }
}
	
	
 
}
})();

