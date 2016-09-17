angular.module('starter.services', [])

.constant('RootUrl', "localhost:8000")

.service('HttpService',['$http', 'RootUrl', function($http, rootUrl){
  return {
    post: function(url, data){
      if (localStorage["token"] === ""){
        return $http({
          method: 'POST',
          url: rootUrl +  url,
          data: data
        })      
      } else {
        return $http({
          method: 'POST',
          url: rootUrl +  url + "?token=" + localStorage["token"],
          data: data
        })
      }
    },
    get: function(url, data){
      return $http({
        method: 'GET',
        url: rootUrl + url + "?token=" + localStorage["token"],
        data: data
      })},
      hoge: function(){
        console.log(rootUrl);
        console.log(localStorage["token"]);
      }
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
