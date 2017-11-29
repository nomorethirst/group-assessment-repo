import templateUrl from 'app/components/landingPage/userAll/userAll.template'

const controller = class userAllController {
  constructor($log, userService) {
  	'ngInject'
  	this.service = userService
  	this.userList = []
  }

  get allUsers() {
    return this.service.getUsers().then(response => {
      this.userList = response.data;
      return response.data;
    })
  }
}

export const userAll = {
  controller,
  templateUrl,
  controllerAs: 'userAll',
  binding: {
  	allUsers: '=' 
  }
}