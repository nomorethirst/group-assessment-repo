import 'app/components/userBlurb/userblurb.styles'
import templateUrl from 'app/components/userBlurb/userblurb.template'

const controller = class FtUserBlurbController {
  constructor($log, $location, userService) { 
    'ngInject'

    this.log = $log
    this.userService = userService
    this.location = $location

    this.followSwitch = false
    this.numFollowers = 0
    
    this.$onInit = () => {
      this.loggedIn = !(this.userService.isAuthenticated())
      this.username = this.user.username
      this.userService.getUser(this.username).then(result => {
        this.user = result.data
        this.email = result.data.profile.email
      })
      this.userService.getFollowers(this.username).then(result => {
        this.followers = result.data
        this.setFollow()
      })
      this.userService.getFollowing(this.username).then(result => {
        this.following = result.data
      })
      this.userService.getMentions(this.username).then(result => {
        this.mentions = result.data
      })
      this.isCurrentUser = !(this.userService.user.username === this.username)
    }
  }

  setFollow(){
    this.numFollowers = this.followers.length
    if (this.userService.isAuthenticated()) {
      for (let i = 0; i < this.followers.length; i++) {
        if (this.userService.getCurrentUser().username === this.followers[i].username) {
          this.followSwitch = true;
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

  follow() {
    this.followSwitch = !this.followSwitch
    this.numFollowers++
    this.userService.follow(this.username)
  }

  unfollow() {
    this.followSwitch = !this.followSwitch
    this.numFollowers--
    this.userService.unfollow(this.username)
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