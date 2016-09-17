angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ProgramCtrl', function($scope) {})

.controller('TimelineCtrl', ['$scope', function($scope) {

}])

.controller('HomeCtrl', ['$scope', '$ionicNavBarDelegate', function($scope, $ionicNavBarDelegate){
    $scope.$on("$ionicView.afterEnter", function(event, data){
   // handle event
   $ionicNavBarDelegate.showBar(false);
 });
}])

.controller('LoginCtrl',['$scope', '$ionicNavBarDelegate', '$http', function($scope, $ionicNavBarDelegate, $http) {

  $scope.username;
  $scope.password;

  $scope.$on("$ionicView.afterEnter", function(event, data){
   // handle event
   $ionicNavBarDelegate.showBar(false);
 });

  $scope.login = function(username, password){
    console.log(username);
    console.log(password);
  }
  $scope.setNavTitle = function(title) {
    $ionicNavBarDelegate.title(title);
  }
}])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
