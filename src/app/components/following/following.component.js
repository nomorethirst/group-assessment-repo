/*angular.module('app').component('followingComponent', {
    templateUrl: 'app/components/following/followingTemplate.html',
    bindings: {
        user : '='
    }
})*/

import 'app/app.styles'
import templateUrl from 'app/components/following/following.template'

const controller = class FtFollowingController {
  constructor($log, appService) {
    'ngInject'
    this.service = appService
    $log.debug('ft-following is a go')
  }

}


export const ftFollowing = {
    controller,
    templateUrl,
    controllerAs: 'following',
    binding: {
      user : '='
    }
  }