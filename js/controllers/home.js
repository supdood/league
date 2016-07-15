myApp.controller('HomeController', ['$scope', '$http', 'Summoner', function($scope, $http, Summoner){
  var key = '?api_key=RGAPI-7A978D8D-2FF6-44D1-89CC-6E73ADE01034';
  var pvpnet = 'https://na.api.pvp.net';
  var playerID;
  
  $.getJSON('js/json/champions.json', function(champData){
    //$scope.champs = getJsonArray(champData.data);
  }); 
  
  $scope.getInfo = function(name){
    Summoner.basicInfo(name).then(function(response){
      $scope.basicInfo = response;
    });
  };
  
  $scope.getRankedStats = function(id, name) {
    Summoner.getRankedStats(id, name).then(function(response){
      $scope.rankedStats = response;
    });
  };
  
  $scope.championByID = function(id) {
    Summoner.championByID(id).then(function(response){
      $scope.champs = response;
    });
  };
  
  $scope.getInfo("supdood");
  $scope.getRankedStats(99, "supdood");
  $scope.championByID("99");
  
}]);