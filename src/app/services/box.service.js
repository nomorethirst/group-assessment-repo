export class BoxService{
    
    constructor($log){
        'ngInject'
        $log.log('box service started!')
    }

    saveBoxData(data, datatype){
        this.data = data
        this.datatype = datatype
    }

    getBoxDataType(){
        return this.datatype
    }
    getBoxData(){
        return this.data
    }
}