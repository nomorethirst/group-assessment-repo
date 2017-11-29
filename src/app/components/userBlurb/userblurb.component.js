import 'app/components/userBlurb/userblurb.styles'
import templateUrl from 'app/components/userBlurb/userblurb.template'

const controller = class FtUserBlurbController {
  constructor($log, tweetService, userService) { 
    'ngInject'
    this.tweetService = tweetService
    this.userService = userService
    this.userId = userService.user.id
    this.username = userService.user.username
    this.email = userService.user.profile.email
    $log.log(this.likes)
    $log.debug('ft-userblurb is a go')
  }
}

export const ftUserBlurb = {
  controller,
  templateUrl,
  controllerAs: 'userblurb',
  bindings:{
    likes: '=',
    mentions: '=',
    followers: '=',
    following: '='
  }
}

