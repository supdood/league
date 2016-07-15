myApp.factory('Summoner', ['$http', function($http) {
  
  var key = '?api_key=RGAPI-7A978D8D-2FF6-44D1-89CC-6E73ADE01034';
  var pvpnet = 'https://na.api.pvp.net';
  
  return {
    
    basicInfo: function(name) {
      var response;
      var address = pvpnet + '/api/lol/na/v1.4/summoner/by-name/' + name + key; 
    
      return $http.get(address).then(function(response){
        return response.data[name];
      });
    },
    
    getRankedStats: function(id, name) {
      var address = pvpnet + '/api/lol/na/v1.3/stats/by-summoner/' + id + '/ranked' + name + key; 

      return $http.get(address).then(function(response){
        return response.data;
      });
    },
    
    championByID: function(id) {
      var address = pvpnet + '/api/lol/static-data/na/v1.2/champion/' + id + key; 
      return $http.get(address).then(function(response){
        return response.data;
      });
    }
    
    
  };
  
}]);