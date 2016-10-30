(function () {
"use strict";

angular.module('public')
.service('SignupService', SignupService);

SignupService.$inject = [];
function SignupService() {
  var service = this;
  service.userInfo = {};
  service.userInfo.completed = false;

  service.saveUser = function(user) {
    service.userInfo = user;
    console.log("UserInfo", service.userInfo);
  };

  service.getUserInfo = function() {
    console.log("getUserInfo", service.userInfo);
    return service.userInfo;
  }
}


})();
