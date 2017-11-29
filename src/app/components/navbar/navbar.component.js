import 'app/app.styles'
import templateUrl from 'app/components/navbar/navbar.template'

const controller = class FtNavBarController {
  constructor($log, $state, $location, userService) {
    'ngInject'
    this.logger = $log
    this.state = $state
    this.location = $location
    this.userService = userService
    this.logger.log('ft-navbar is a go')
  }

  showProfileOrSignup(){
    this.state.transitionTo(this.refProfileOrSignup)
  }

  userOrSignup() {
    return this.userService.user === null 
      ? "Sign Up" 
      : this.userService.user.username
  }

  get refProfileOrSignup() {
    return this.userService.user === null 
      ? 'signup'
      : 'profile'
  }

  loginOrLogout() {
    return this.userService.user === null 
      ? "Login" 
      : "Logout"
  }

  get refLoginOrLogout() {
    return this.userService.user === null 
      ? "login" 
      : "logout"
  }

  clickLogout() {
    if (this.userService.user !== null)
      this.userService.logout()
      this.location.path('login')
  }
}

export const ftNavBar = {
  controller,
  templateUrl,
  controllerAs: 'navbar'
}
