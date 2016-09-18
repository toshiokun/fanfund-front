angular.module('starter.api', [])
  .constant('BaseUrl', 'http://localhost:8000/api/v1')
  .service('AuthApi', ['$http', 'BaseUrl', function($http, BaseUrl) {
    return {
      login: function(identify_, password_) {
        return $http
                .post(BaseUrl + '/auth/login', { identify: identify_, password: password_})
                .success(function(data_) {
                  console.log(data_);
                })
                .error(function(data_) {
                  console.log(data_);
                });
      },
      twitter: function() {
        return $http
                .get(BaseUrl + '/auth/twitter')
                .success(function(data_) {
                  if(data_.url !== '') {
                    location.href = data_.url;
                  }
                })
                .error(function(data_) {
                  console.log(data_);
                });
      }
    }
  }])