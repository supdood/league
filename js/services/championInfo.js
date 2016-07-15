myApp.factory('ChampionInfo', [function(){
  
  var champInfo;
  
  $.getJSON('js/json/champions.json', function(champData){
    champInfo = champData;
  });
  
  return {
    championByID: function(id) {
      
      console.log(champInfo.data);
      
    });
  }

  
  
  
}]);