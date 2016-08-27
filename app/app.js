
 angular.module("app",[])
 .controller("ctrl1",ctrl1);
 
 function ctrl1($scope){
 	$scope.name="hello angular"
 	$scope.colors=["red","black","blue"];
 }
