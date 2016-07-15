myApp.controller('HomeController', ['$scope', '$http', 'Summoner', function($scope, $http, Summoner){
  var key = '?api_key=RGAPI-7A978D8D-2FF6-44D1-89CC-6E73ADE01034';
  var pvpnet = 'https://na.api.pvp.net';
  var playerID;
  
  $.getJSON('js/json/champions.json', function(champData){
    $scope.champs = getJsonArray(champData.data);
  }); 
  
  $scope.getInfo = function(name) {
    var address = pvpnet + '/api/lol/na/v1.4/summoner/by-name/' + name + key; 
    
    $http.get(address).then(function(response){
      $scope.basicInfo = response.data[name];
    });
  };
  
  $scope.getRankedStats = function(id) {
    var address = pvpnet + '/api/lol/na/v1.3/stats/by-summoner/' + id + '/ranked' + name + key; 
    
    $http.get(address).then(function(response){
      $scope.rankedStats = response.data;
    });
    
  };
  
  $scope.championByID = function(id) {
    var address = pvpnet + '/api/lol/static-data/na/v1.2/champion/' + id + key; 
    $http.get(address).then(function(response){
      $scope.champs = response.data;
      return response.data;
    });
    
  }
  
  $scope.getInfo("supdood");
  
  $scope.$watch("basicInfo.id", function(){
    $scope.getRankedStats($scope.basicInfo.id);
  });
  
  //$scope.championByID(18);
  
}]);