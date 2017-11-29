import templateUrl from 'app/components/userWidget/userWidget.template'
import 'app/components/userWidget/userWidget.styles.css'

const controller = class UserWidgetController {
  constructor($log, userService) {
    'ngInject'
    this.service = userService
    this.logger = $log
    this.followOption = "Follow"
    this.followingList = []
    this.$onInit = () => {
      if (this.loggedIn()) {
        this.followingList = this.service.getFollowing(this.service.getUserData.username).then(response => {
        	return response.data
        })
        this.followingList[0] = "Braddy"
        if (this.followingList) {
          this.logger.log(this.followingList)
          for (user in this.followingList) {
            if (user.username === this.user.username) {
              this.followOption = "Unfollow"
              return
            }
          }
        }
      }
    }
  }

  loggedIn() {
  	return this.service.isAuthenticated()
  }

  convertTime(timeInMillis) {
  	var options = {  
      hour: "2-digit", minute: "2-digit", weekday: "long", 
      year: "numeric", month: "short", day: "numeric"   
    }  
  	return new Date(timeInMillis).toLocaleTimeString("en-us", options)
  }

  follow() {
  	if (this.followOption === "Follow") {
  	  this.service.follow(this.user.username)
  	} else {
  	  this.service.unfolllow(this.user.username)
  	}
  }
}

export const ftUserWidget = {
  controller,
  templateUrl,
  controllerAs: 'ftUserWidget',
  bindings: {
  	user: '='
  }
}