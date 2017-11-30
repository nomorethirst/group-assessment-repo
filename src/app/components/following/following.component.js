import 'app/components/following/following.styles'
import templateUrl from 'app/components/following/following.template'

const controller = class FtFollowingController {
  constructor($log, userService, $state) {
    'ngInject'
    this.userService = userService
    this.state = $state;
		this.username = this.state.params.username
    $log.debug('ft-following is a go')
    this.followingList = []
  }


  getFollowing(){
    return this.userService.getFollowing(this.username).then(response => {
  	  this.followingList = response.data
  	})
  }
}


export const ftFollowing = {
    controller,
    templateUrl,
    controllerAs: 'following',
    /*binding: {
      following : '='
    }*/
  }