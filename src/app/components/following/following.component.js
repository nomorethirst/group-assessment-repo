import 'app/components/following/following.styles'
import templateUrl from 'app/components/following/following.template'

const controller = class FtFollowingController {
  constructor($log, userService) {
    'ngInject'
    this.userService = userService
    $log.debug('ft-following is a go')
  }

}


export const ftFollowing = {
    controller,
    templateUrl,
    controllerAs: 'following',
    binding: {
      following : '='
    }
  }