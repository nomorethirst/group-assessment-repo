import templateUrl from 'app/components/userPage/userPage.template'
import "app/components/userPage/styles.css"

const controller = class UserPageController {
  constructor ($log, $state, userService) {
  	'ngInject'
  	this.service = userService

	this.state = $state;
	this.logger = $log
	if (this.service.isAuthenticated()) {
		this.username = this.service.user.username
	} else {
		this.username = this.state.params.username
		this.logger.log(this.username)
	}
  	this.userTweetList = []
  	
  }
  
  getUser() {
  	return this.service.getUser(this.username).then(response => {
  	  this.user = response.data
      this.logger.log(this.user)
      return response.data
  	})
  }

  getTweets() {
  	return this.service.getTweets(this.username).then(response => {
  	  this.userTweetList = response.data
  	  return response.data
  	})
  }

  convertTime(timeInMillis) {
  	return new Date(timeInMillis).toString()
  }
}

export const ftUserPage = {
  controller,
  templateUrl,
  controllerAs: 'userPage'
}