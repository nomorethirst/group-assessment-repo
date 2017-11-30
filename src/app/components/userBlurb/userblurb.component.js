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
        this.user = result.data
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
      if (this.userService.isAuthenticated()) {
        for (follow in this.followers) {
          if (this.userSerivce.user.username === followers) {
            this.isFollowing = true;
          }
        }
      }
    }
  }

  convertTime(timeInMillis) {
    var options = {  
      hour: "2-digit", minute: "2-digit", weekday: "short", 
      year: "numeric", month: "short", day: "numeric"   
    }  
    return new Date(timeInMillis).toLocaleTimeString("en-us", options)
  }

  loggedIn() {
    return !this.userService.isAuthenticated()
  }

  follow() {
    this.userService.follow(this.user.username)
    this.route.reload()
  }

  unfollow() {
    this.userService.unfollow(this.user.username)
    this.route.reload()
  }

}

export const ftUserBlurb = {
  controller,
  templateUrl,
  controllerAs: 'userblurb',
  bindings: {
    user: '='
  }
}