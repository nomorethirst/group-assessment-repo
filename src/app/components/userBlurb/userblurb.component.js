import 'app/app.styles'
import templateUrl from 'app/components/userblurb/userblurb.template'

const controller = class FtUserBlurbController {
  constructor($log, userblurbService) {
    'ngInject'
    this.service = userblurbService
    $log.debug('ft-userblurb is a go')
  }

  getFollowers(){
    return this.service.userFollowers(username)
  }

  getFollowing(){
    return this.service.userFollowing(username)
  }

  getLikes(){
    return this.service.userLikes(username)
  }

  getMentions(){
    return this.service.userMentions(username)
  }


}

export const ftUserBlurb = {
  controller,
  templateUrl,
  controllerAs: 'userblurb'
}

