angular.module('app').service('likesService', ['$http', function($http){
    
        this.getAll = () => {
            return $http.get('http://localhost:8080/username/likes') //api endpoint
        }
    
    }])