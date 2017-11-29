import 'app/components/userBlurb/userblurb.styles'
import templateUrl from 'app/components/userBlurb/userblurb.template'

const controller = class FtUserBlurbController {
  constructor($log, userService) { 
    'ngInject'
    
    this.userService = userService
    /*
    this.userId = userService.user.id
    this.username = userService.user.username
    this.email = userService.user.profile.email
    */
    $log.debug('ft-userblurb is a go')
  }


}

export const ftUserBlurb = {
  controller,
  templateUrl,
  controllerAs: 'userblurb',
  bindings:{
    mentions: '=',
    followers: '=',
    following: '=',
    userblurb: '='
  }
}

