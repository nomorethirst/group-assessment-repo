import templateUrl from 'app/components/landingPage/userAll/userAll.template'

const controller = class userAllController {
  constructor($log, userService) {
  	'ngInject'
  	this.service = userService
  	this.userList = this.service.getUsers()
  }

}

export const userAll = {
  controller,
  templateUrl,
  controllerAs: 'userAll'
}