myApp.controller('HomeController', ['$scope', '$http', 'Summoner', function ($scope, $http, Summoner) {
  var key = '?api_key=RGAPI-7A978D8D-2FF6-44D1-89CC-6E73ADE01034';
  var pvpnet = 'https://na.api.pvp.net';
  var playerID;

  $scope.getInfo = function (name) {
    Summoner.basicInfo(name).then(function (response) {
      $scope.basicInfo = response;
    });
  };

  $scope.getRankedStats = function () {
    $scope.$watch("basicInfo", function () {

      console.log($scope.basicInfo);
      Summoner.getRankedStats($scope.basicInfo.id).then(function (response) {
        $scope.rankedStats = response;
      });
    });
  };

  $scope.championByID = function (id) {
    $scope.champs = Summoner.championByID(id);
  };

  $scope.getInfo("supdood");
  $scope.getRankedStats("supdood");
  $scope.championByID(99);

}]);