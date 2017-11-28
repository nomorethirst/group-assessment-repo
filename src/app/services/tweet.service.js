let HOST = 'localhost'
let PORT = 8080

export class TweetService{

    constructor($log, $http){
        'ngInject'
        this.http = $http
        this.log = $log
        $log.log('hello from TweetService!')
    }

    getAll(){
        return this.http.get('http://' + HOST + ':' + PORT + '/tweets/')
    }

    getById(id){
        return this.http.get('http://' + HOST + ':' + PORT + '/tweets/' + id)
    }

    getTagsById(id){
        return this.http.get('http://' + HOST + ':' + PORT + '/tweets/' + id + '/tags')
    }

    getContextById(id){
        return this.http.get('http://' + HOST + ':' + PORT + '/tweets/' + id + '/context')
    }

    getRepliesById(id){
        return this.http.get('http://' + HOST + ':' + PORT + '/tweets/' + id + '/replies')
    }

    getRepostById(id){
        return this.http.get('http://' + HOST + ':' + PORT + '/tweets/' + id + '/reposts')
    }

    getMentionsById(id){
        return this.http.get('http://' + HOST + ':' + PORT + '/tweets/' + id + '/mentions')
    }

    getLikesById(id){
        return this.http.get('http://' + HOST + ':' + PORT + '/tweets/' + id + '/likes')
    }

    post(requestBody){
        return this.http.post('http://' + HOST + ':' + PORT + '/tweets/', requestBody)
    }

    like(id, requestBody){
        return this.http.post('http://' + HOST + ':' + PORT + '/tweets/' + id + '/like', requestBody)
    }

    reply(id, requestBody){
        return this.http.post('http://' + HOST + ':' + PORT + '/tweets/' + id + '/reply', requestBody)
    }

    repost(id, requestBody){
        return this.http.post('http://' + HOST + ':' + PORT + '/tweets/' + id + '/repost', requestBody)
    }

    delete(id){
        return this.http.delete('http://' + HOST + ':' + PORT + '/tweets/' + id)
    }
}