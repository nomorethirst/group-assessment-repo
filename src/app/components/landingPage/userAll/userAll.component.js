import templateUrl from 'app/components/landingPage/userAll/userAll.template'

const controller = class userAllController {
  constructor($log, userService) {
  	'ngInject'
  	this.service = userService
  }
}

export const userAll = {
  controller,
  templateUrl,
  controllerAs: 'userAll'
}