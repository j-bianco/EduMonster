var app = angular.module("eduApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/")

  $stateProvider
    .state("math", {
      url: "/",
      templateUrl: "/views/math.html",
      controller: "eduController"
    })
})
