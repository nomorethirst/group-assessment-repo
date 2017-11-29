import 'app/components/feedblurb/feedblurb.styles'
import templateUrl from 'app/components/feedblurb/feedblurb.template'

const controller = class FtUserFeedBlurbController {
  constructor($log, userService, $scope) { 
    'ngInject'

    this.userService = userService
    this.userId = userService.user.id
    this.username = userService.user.username
    this.email = userService.user.profile.email
    this.followers = userService.getUserData().followers
    this.following = userService.getUserData().following
    this.mentions = userService.getUserData().mentions
    $log.debug('ft-userblurb is a go')
  }
}

export const ftUserFeedBlurb = {
  controller,
  templateUrl,
  controllerAs: 'feedblurb'
}