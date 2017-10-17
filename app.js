angular.module('ToDoList', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', 
	{url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'})
  $urlRouterProvider.otherwise('home');
}]) 

.factory('taskFactory', [function(){
  var o = {
    tasks:[]
  };
  return o;
}])

.controller('MainCtrl', 
['$scope',
'taskFactory',
function($scope, taskFactory){
  $scope.test = 'Hello world!';

  $scope.tasks = taskFactory.tasks;

  $scope.addTask = function(){
    if($scope.formContent === '') { return; }
    $scope.tasks.push({
      title:$scope.formContent,
      priority: 1,
      completed:false;
      notes: []
    });
    $scope.formContent = '';
  };

  $scope.removeCompleted = function(){
	//code for removal of checked boxes
  };

  $scope.increasePriority = function(task) {
    task.priority += 1;
  };

  $scope.decreasePriority = function(task) {
    if(task.priority > 1)
	{task.priority -= 1;}
  };

}]);