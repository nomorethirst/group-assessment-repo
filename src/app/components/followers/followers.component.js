/*angular.module('app').component('followersComponent', {
    templateUrl: 'app/components/followers/followersTemplate.html',
    bindings: {
        user : '='
    }
})*/

import 'app/app.styles'
import templateUrl from 'app/components/followers/followers.template'

const controller = class FtFollowersController {
  constructor($log, appService) {
    'ngInject'
    this.service = appService
    $log.debug('ft-followers is a go')
  }

}

export const ftFollowers = {
    controller,
    templateUrl,
    controllerAs: 'followers',
    bindings: {
      user: "="
    }
  }