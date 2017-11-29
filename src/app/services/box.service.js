export class BoxService{
    
    constructor($log){
        'ngInject'
        $log.log('box service started!')
    }

    saveBoxData(data){
        this.data = data
    }

    getBoxData(){
        return this.data
    }
}