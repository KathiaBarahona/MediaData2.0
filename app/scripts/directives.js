var app = angular.module('page-directives', []);
var userCtrl =  ['$scope','$http',function($scope,$http){
              $scope.user = {};
              var url = "https://secret-lowlands-8912.herokuapp.com";
              console.log("Entra al controller de users");
              $scope.getUsers = function(){
                 $http.get(url+'/users').success(function(data){
                          console.log(data);
                          $scope.users = data;
                 });
              };
              $scope.addUser = function(){
                 console.log($scope.entry);
                 $http.post(url+'/users',$scope.user).success(function(response){
                          console.log(response);
                          getUsers();
                 });
              };
}];
var controller = ['$scope','$http',function($scope,$http){
              $scope.entry = {};
              var url = "https://secret-lowlands-8912.herokuapp.com";
              console.log("Entra al controller de entries");
              $scope.getEntries = function(){
                 $http.get(url+'/registros').success(function(data){
                          console.log(data);
                          $scope.entries = data;
                 });
              };
              $scope.addEntry = function(){
                 console.log($scope.entry);
                 $http.post(url+'/registros',$scope.entry).success(function(response){
                          console.log(response);
                          getEntries();
                 });
              };
}];
   app.directive("listEntries",function(){
        
         return {
            restrict: "E",
            templateUrl: "views/list-entries.html",
            controller: controller
         };
   });
   app.directive("headerTabs", function() {
            return {
              restrict: "E",
              templateUrl: "views/header-tabs.html",
              controller: function() {
                this.tab = 1;

                this.isSet = function(checkTab) {
                  return this.tab === checkTab;
                };

                this.setTab = function(activeTab) {
                  this.tab = activeTab;
                };
              },
              controllerAs: "tab"
            };
    });
    app.directive('jqueryMobileTpl', function () {
	    return {
	        link: function (scope, elm, attr) {
	            elm.trigger('create');
	        }
	    };
	});
  app.directive('repeatDone', function () {
      return function (scope, element, attrs) {
          // When the last element is rendered
          if (scope.$last) { 
              element.parent().parent().trigger('create');
          }
      }
  });
  app.directive("newEntry", function() {
    return {
      restrict: "E",
      templateUrl: "views/new-entry.html",
      controller: controller
    }
  });
