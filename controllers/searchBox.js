
(function(){
	var imdb = angular.module("app");
	
	imdb.controller("searchBox", searchBox)

	function searchBox($scope,$http) {
	$scope.title = "Search for actors or movies";
	
  	$scope.searchActors = function (e, myValue) {
    var charCode = (e.which) ? e.which : e.keyCode;   
        if ($scope.movies) 
    		  $scope.movies=null; 
    		  console.log(myValue);
    	if (!myValue)  {
    		$scope.actors = null;
    		$scope.actor = null;
			$scope.moviesByActor = null;
    		$scope.title = "No data found";
    	}
    	else {  
    		$scope.actors = $scope.getActors(myValue);
    		$scope.title = "Actors";
   		 }
	} 
	
	$scope.getActors = function (name){
		var promise = $http.get('http://api.themoviedb.org/3/search/person?api_key=f24727bdb915ca05f7718876104b211d&query=' + name);
		
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

	
	$scope.getMovies = function (name){
		var promise = $http.get('http://api.themoviedb.org/3/search/movie?api_key=f24727bdb915ca05f7718876104b211d&query=' + name);
		
		promise.then(successCallback,errorCallback);
		
		function successCallback(response)
		{
			$scope.movies = response.data.results;
			console.log($scope.movies);
		}
		
		function errorCallback(response)
		{
			alert('error');
		}	
	
	}

	
	$scope.getMoviesOfActor = function (actor){

		$scope.actors = null;
    	$scope.title = "No data found";
		var promise = $http.get('http://api.themoviedb.org/3/person/'+ actor.id +'/movie_credits?api_key=f24727bdb915ca05f7718876104b211d');
		
		promise.then(successCallback,errorCallback);
		
		function successCallback(response)
		{
			$scope.actor = actor;
			$scope.moviesByActor = response.data.crew;
		}
		
		function errorCallback(response)
		{
			alert('error');
		}	
	
	}
	
	
	$scope.getActorsInMovie = function (movie){

		alert('in');
		$scope.movies = null;
    	$scope.title = "No data found";
		var promise = $http.get('http://api.themoviedb.org/3/movie/'+ movie.id +'/credits?api_key=f24727bdb915ca05f7718876104b211d');
		
		promise.then(successCallback,errorCallback);
		
		function successCallback(response)
		{
			console.log(response);
			$scope.movie = movie;
			$scope.actorsInMovie = response.data.crew;
		}
		
		function errorCallback(response)
		{
			alert('error');
		}	
	
	}
	
	$scope.searchMovies = function (e, myValue) {
    var charCode = (e.which) ? e.which : e.keyCode; 
    	if ($scope.actors) 
    		  $scope.actors=null;   
    	if (!myValue)  {
    		$scope.movies = null;
    		$scope.actor = null;
			$scope.moviesByActor = null;
    		$scope.title = "No data found";
    	}
    		
    	else   {	   
    		$scope.movies = $scope.getMovies(myValue);
    		$scope.title = "Movies";
    	}
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

