(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

//SignupController.$inject = ['menuCategories'];
function SignupController() {
  var reg = this;
  //$ctrl.menuCategories = menuCategories;

  reg.submit = function() {
    reg.completed = true;
    $window.location.href = '/index.html'
  };
}


})();
