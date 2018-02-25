/* global angular*/
angular.module("myApp").controller("FilmController", FilmController);

function FilmController($routeParams, FilmFactory) {
    var vm = this;
    var id = $routeParams.id;
    FilmFactory.getOnefilm(id).then(function(res) {
        vm.film = res;   
    });
        
}