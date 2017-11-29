import 'app/components/followers/followers.styles'
import templateUrl from 'app/components/followers/followers.template'

const controller = class FtFollowersController {
  constructor($log, userService) {
    'ngInject'
    this.userService = userService
    this.username = userService.user.username
    $log.debug('ft-followers is a go')
    this.followersList = []
  }

  getFollowers() {
  	return this.userService.getFollowers(this.username).then(response => {
  	  this.followersList = response.data
  	})
  }

}

export const ftFollowers = {
    controller,
    templateUrl,
    controllerAs: 'followers',
    /*bindings: {
      followers: "="
    }*/
  }