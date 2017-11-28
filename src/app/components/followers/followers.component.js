import 'app/components/followers/followers.styles'
import templateUrl from 'app/components/followers/followers.template'

const controller = class FtFollowersController {
  constructor($log, userService) {
    'ngInject'
    this.userService = userService
    $log.debug('ft-followers is a go')
  }

}

export const ftFollowers = {
    controller,
    templateUrl,
    controllerAs: 'followers',
    bindings: {
      followers: "="
    }
  }