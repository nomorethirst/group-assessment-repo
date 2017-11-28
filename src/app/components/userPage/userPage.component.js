import templateUrl from 'app/components/userPage/userPage.template'

const controller =
  class UserPageController {
  	constructor (userService) {
  	  'ngInject'
  	  this.service = userService
    }
}

export const ftUserPage = {
  controller,
  templateUrl,
  controllerAs: 'userPage'
}