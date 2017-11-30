export class BoxService{
    
    constructor($log){
        'ngInject'
        $log.log('box service started!')
        // this.data = [
        //     {
        //        content: "eee",
        //        author: {
        //            username: 'travis'
        //        },
        //        inRepostOf: null,
        //        inReplyTo: null
        //     },
        //     {
        //         content: "damn this css is ugly",
        //         author: {
        //             username: 'travis'
        //         },
        //         inRepostOf: null,
        //         inReplyTo: null
        //      }
        // ]
        // this.data = [
        //     {
        //        username: 'wmarttala'
        //     }, 
        //     {
        //        username: 'mboren'
        //     }
        // ]
        this.datatype = 2
    }

    saveBoxData(data, datatype){
        this.data = data
        this.datatype = datatype
    }

    get boxDataType(){
        return this.datatype
    }
    get boxData(){
        return this.data
    }
}