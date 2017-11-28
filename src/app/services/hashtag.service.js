let HOST = 'localhost'
let PORT = 8080

export class HashtagService{

    constructor($log, $http){
        'ngInject'
        this.http = $http
        this.log = $log
        $log.log('hello from HashtagService!')
        this.getByLabel('hello')
    }

    getAll(){
        return this.http.get('http://' + HOST + ':' + PORT + '/tags/')
    }

    getByLabel(label){
        return this.http.get('http://' + HOST + ':' + PORT + '/tags/' + label)
    }
}