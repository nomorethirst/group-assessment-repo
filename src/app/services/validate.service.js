let HOST = 'localhost'
let PORT = 8080

export class ValidateService{

    constructor($log, $http){
        'ngInject'
        this.http = $http
        this.log = $log
        $log.log('hello from HashtagService!')
        this.getByLabel('hello')
    }

    getTagExists(label){
        return this.http.get('http://' + HOST + ':' + PORT + '/validate/tag/exists/' + label)
    }

    getUsernameExists(username){
        return this.http.get('http://' + HOST + ':' + PORT + '/validate/username/exists/' + username)
    }

    getUsernameAvaliable(username){
        return this.http.get('http://' + HOST + ':' + PORT + '/validate/username/avaliable' + username)
    }
}