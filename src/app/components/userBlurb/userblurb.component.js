import 'app/components/userBlurb/userblurb.styles'
import templateUrl from 'app/components/userBlurb/userblurb.template'

const controller = class FtUserBlurbController {
  constructor($log, userService) { 
    'ngInject'
    this.log = $log
    this.userService = userService
    this.$onInit = () => {
      this.username = this.user.username
      this.userService.getUser(this.username).then(result => {
        this.email = result.data.profile.email
      })
      this.userService.getFollowers(this.username).then(result => {
        this.followers = result.data
      })
      this.userService.getFollowing(this.username).then(result => {
        this.following = result.data
      })
      this.userService.getMentions(this.username).then(result => {
        this.mentions = result.data
      })

      this.followOption = "Follow"

      if (this.userService.isAuthenticated()) {
        if (this.following) {
          this.logger.log(this.following)
          for (followed in this.following) {
            if (followed.username === this.user.username) {
              this.followOption = "Unfollow"
              return
            }
          }
        }
      }
    }
    $log.debug('ft-userblurb is a go')
  }

  convertTime(timeInMillis) {
    var options = {  
      hour: "2-digit", minute: "2-digit", weekday: "short", 
      year: "numeric", month: "short", day: "numeric"   
    }  
    return new Date(timeInMillis).toLocaleTimeString("en-us", options)
  }

  loggedIn() {
    return !(this.userService.isAuthenticated())
  }

  follow() {
    this.log.log("follow is getting called")
    if (this.followOption === "Follow") {
      this.userService.follow(this.user.username)
      this.log.log(this.user.username)
    } else {
      this.userService.unfolllow(this.user.username)
    }
  }

}

export const ftUserBlurb = {
  controller,
  templateUrl,
  controllerAs: 'userblurb',
  bindings:{
    user: '='
  }
}

