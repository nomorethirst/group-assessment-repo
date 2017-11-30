import 'app/components/followers/followers.styles'
import templateUrl from 'app/components/followers/followers.template'

const controller = class FtFollowersController {
  constructor($log, userService, $state) {
    'ngInject'
    this.userService = userService
    this.state = $state;
    this.username = this.state.params.username
    this.followersList = []
    $log.debug('ft-followers is a go')

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