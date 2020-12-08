var app = angular.module("myApp", ["ngRoute"]);
let g42Content="g42Content sample example";
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {//"app/home/home.html"
    templateUrl :"app/goralut/goralut.html" ,
    controller : "gCtrl" ,
    caseInsensitiveMatch: true
  })
  .when("/goralut", {
    templateUrl : "app/goralut/goralut.html",
    controller : "gCtrl" ,
    caseInsensitiveMatch: true
  })
  .when("/72", {
    templateUrl : "app/goralut/72names.html",
    controller : "gCtrl" ,
    caseInsensitiveMatch: true
  })
  // .when("/goral117", {
  //   templateUrl : "app/goralut/g117.html"
  // })
  // .when("/goral42", {
  //   // templateUrl : "app/goralut/g42.html"
  //   template:" "+g42Content
  // })
  
});