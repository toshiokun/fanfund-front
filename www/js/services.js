angular.module('starter.services', [])

.constant('RootUrl', "http://localhost:8000")

.service('HttpService',['$http', 'RootUrl', function($http, rootUrl){
  return {
    login: function(data, onSuccess, onFailed){
      $http.post(rootUrl + "/api/v1/auth/login", data).success(onSuccess).error(onFailed);
    },
    getPrograms: function(onSuccess, onFailed){
      $http.get(rootUrl + "/api/v1/programs" + "?token=" + localStorage["token"]).success(onSuccess).error(onFailed);
    },
    getProgramDetail: function(programId, onSuccess, onFailed){
      $http.get(rootUrl + "/api/v1/programs" + "/" + programId + "?token=" + localStorage["token"])
      .success(onSuccess)
      .error(onFailed);
    },
    buyTicket: function(programId, number, price, onSuccess, onFailed){
      console.log({"number": number, "price": price, "type": "limit"});
      $http.post(rootUrl + "/api/v1/programs" + "/" + programId + "/buylist?token=" + localStorage["token"], {"number": number, "price": price, "type": "limit"}).success(onSuccess).error(onFailed);
    },
    sellTicket: function(programId, number, price, onSuccess, onFailed){
      $http.get(rootUrl + "/api/v1/programs" + "/" + programId + "/salelist?token=" + localStorage["token"], {"number": number, "price": price, "type": "limit"}).success(onSuccess).error(onFailed);
    },
    countStock: function(programId, onSuccess, onFailed){
      $http.get(rootUrl + "/api/v1/programs" + "/" + programId + "/stocks/count?token=" + localStorage["token"]).success(onSuccess).error(onFailed);
    },
    countUsers: function(programId, onSuccess, onFailed){
      $http.get(rootUrl + "/api/v1/programs" + "/" + programId + "/stocks/count/user?token=" + localStorage["token"]).success(onSuccess).error(onFailed);
    },
    getSelf: function(onSuccess, onFailed){
      $http.get(rootUrl + "/api/v1/auth/self" + "?token=" + localStorage["token"]).success(onSuccess).error(onFailed);
    },
      $http.get(rootUrl + "/api/v1/programs/" + programId + "/stocks" + "?token=" + localStorage["token"]).success(onSuccess).error(onFailed);
    },
  }
}])
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
