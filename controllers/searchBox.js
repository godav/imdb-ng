
(function(){
	var imdb = angular.module("app");
	
	imdb.controller("searchBox", searchBox)

	function searchBox($scope,$http) {
	$scope.title = "Search for actors or movies";
	$scope.actor = null;
	$scope.movie = null;
	$scope.moviesByActor = null;
	$scope.actorsInMovie = null;
	
  	$scope.searchActors = function (e, myValue) {
  		    $scope.actor = null;
    		$scope.movie = null;
    		$scope.actorsInMovie = null; 		
			$scope.moviesByActor = null;
    var charCode = (e.which) ? e.which : e.keyCode;   
        if ($scope.movies) 
    		  $scope.movies=null; 
    		  console.log(myValue);
    	if (!myValue)  {
    		$scope.actors = null;
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
		}
		
		function errorCallback(response)
		{
			alert('error');
		}	
	
	}

	
	$scope.getMoviesOfActor = function (actor){
console.log(actor);
		$scope.actors = null;
    	$scope.title = actor.name + " movies:";
    	console.log('http://api.themoviedb.org/3/person/'+ actor.id +'/movie_credits?api_key=f24727bdb915ca05f7718876104b211d');
		var promise = $http.get('http://api.themoviedb.org/3/person/'+ actor.id +'/movie_credits?api_key=f24727bdb915ca05f7718876104b211d');
		
		promise.then(successCallback,errorCallback);
		
		function successCallback(response)
		{
			console.log($scope.moviesByActor);
			$scope.movie = null;
			$scope.actorsInMovie = null;
			$scope.actor = actor;
			$scope.moviesByActor = response.data.crew;
		}
		
		function errorCallback(response)
		{
			
			$scope.movie = null;
			$scope.actorsInMovie = null;
			$scope.actor = null;
			$scope.moviesByActor = null;
			console.log(response);
			$scope.title = "Data is not avalible";
		}	
	
	}
	
	
	$scope.getActorsInMovie = function (movie){


		$scope.movies = null;
    	$scope.title = movie.title + " actors:";

		var promise = $http.get('http://api.themoviedb.org/3/movie/'+ movie.id +'/credits?api_key=f24727bdb915ca05f7718876104b211d');
		
		promise.then(successCallback,errorCallback);
		
		function successCallback(response)
		{
			$scope.actor = null;
			$scope.moviesByActor = null;
			$scope.movie = movie;
			console.log($scope.actorsInMovie);
			$scope.actorsInMovie = response.data.cast;
		}
		
		function errorCallback(response)
		{
			$scope.movie = null;
			$scope.actorsInMovie = null;
			$scope.actor = null;
			$scope.moviesByActor = null;
			console.log(response);
			$scope.title = "Data is not avalible";
		}	
	
	}
	
	$scope.searchMovies = function (e, myValue) {
    var charCode = (e.which) ? e.which : e.keyCode; 
    	$scope.actor = null;
    		$scope.movie = null;
    		$scope.actorsInMovie = null; 		
			$scope.moviesByActor = null;
    	if ($scope.actors) 
    		  $scope.actors=null;   
    	if (!myValue)  {
    		$scope.movies = null;
    		
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

