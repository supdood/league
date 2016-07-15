myApp.factory('Summoner', ['$http', function($http) {
  
  var key = 'RGAPI-7A978D8D-2FF6-44D1-89CC-6E73ADE01034';
  
  return {
    
    basicInfo: function(name) {
      var response;
      $http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + name + '?api_key=' + key).then(function(){
        console.log("success");
      });
      console.log("success 2");
      return "test case";
    }
    
    
  };
  
}]);