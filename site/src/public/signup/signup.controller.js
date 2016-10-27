(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['menuCategories'];
function SignupController(menuCategories) {
  var reg = this;
  $ctrl.menuCategories = menuCategories;

  this.submit = function() {

  };
}


})();
