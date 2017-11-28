/*angular.module('app').component('likesComponent', {
    templateUrl: 'app/components/likes/likesTemplate.html',
    bindings: {
        tweet: '='
    }
})*/

import 'app/app.styles'
import templateUrl from 'app/components/likes/likes.template'

const controller = class FtLikesController {
  constructor($log, appService) {
    'ngInject'
    this.service = appService
    $log.debug('ft-likes is a go')
  }

}


export const ftLikes = {
    controller,
    templateUrl,
    controllerAs: 'likes',
    binding: {
      tweet : '='
    }

  }