(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController)
.controller('MyInfoController', MyInfoController);

SignupController.$inject = ['$location', '$state', 'menuItems', 'SignupService'];
function SignupController($location, $state, menuItems, SignupService) {
  var reg = this;
  reg.menuItems = menuItems.menu_items;

  console.log("reg", reg);

  reg.submit = function() {
    console.log("reg", reg);
    reg.user.completed = true;
    SignupService.saveUser(reg.user);
    $state.go('public.myinfo')
  };
};

MyInfoController.$inject = ['userInfo', 'ApiPath'];
function MyInfoController(userInfo, ApiPath) {
  var myInfo = this;
  myInfo.userInfo = userInfo;

  if (myInfo.userInfo.completed) {
    myInfo.userInfo.image = ApiPath + "/images/" + myInfo.userInfo.favorite.short_name + ".jpg";
  }
}

})();
