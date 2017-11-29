import 'app/components/userblurb/userblurb.styles'
import templateUrl from 'app/components/userblurb/userblurb.template'

const controller = class FtUserBlurbController {
  constructor($log, tweetService, userService) { 
    'ngInject'
    this.tweetService = tweetService
    this.userService = userService
    this.userId = userService.user.id
    this.username = userService.user.username
    this.email = userService.user.profile.email
    $log.debug('ft-userblurb is a go')
  }

  getFollowers(){
    return this.userService.getFollowers(this.username).then((response) => {
      return response.data
    })
  }

  getFollowing(){
    return this.userService.getFollowing(this.username).then((response) => {
      return response.data
    })
  }

  getLikes(){
    return this.tweetService.getLikesById(this.userId).then((response) => {
      return response.data
    })
  }

  getMentions(){
    return this.tweetService.getMentionsById(this.userId).then((response) => {
      return response.data
    })
  }


}

export const ftUserBlurb = {
  controller,
  templateUrl,
  controllerAs: 'userblurb',
}

