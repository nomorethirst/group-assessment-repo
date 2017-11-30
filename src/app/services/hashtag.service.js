let HOST = 'localhost'
let PORT = 8080

export class HashtagService{

    constructor($log, $http){
        'ngInject'
        this.http = $http
        this.log = $log
        $log.log('hello from HashtagService!')
    }

    saveOptionalQuery(query){
        this.optionalQuery = query
    }

    getOptionalQuery(){
        return this.optionalQuery
    }

    getAll(){
        return this.http.get('http://' + HOST + ':' + PORT + '/tags/')
    }

    getByLabel(label){
        return this.http.get('http://' + HOST + ':' + PORT + '/tags/' + label)
    }
}