let HOST = 'localhost'
let PORT = 8080

export class ValidateService{

    constructor($log, $http){
        'ngInject'
        this.http = $http
        this.log = $log
        $log.log('hello from ValidateService!')
    }

    getTagExists(label){
        return this.http.get('http://' + HOST + ':' + PORT + '/validate/tag/exists/' + label)
    }

    getUsernameExists(username){
        return this.http.get('http://' + HOST + ':' + PORT + '/validate/username/exists/' + username)
    }

    getUsernameAvailable(username){
        return this.http.get('http://' + HOST + ':' + PORT + '/validate/username/avaliable/' + username)
    }
}