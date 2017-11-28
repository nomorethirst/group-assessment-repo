import 'app/app.styles'
import templateUrl from 'app/components/navbar/navbar.template'

const controller = class FtNavBarController {
  constructor($log, $state, $location, userService) {
    'ngInject'
    this.log = $log
    this.state = $state
    this.location = $location
    this.service = userService
    $log.debug('ft-navbar is a go')
  }

  showProfileOrSignup(){
    this.state.transitionTo(this.refProfileOrSignup)
  }

  userOrSignup() {
    return this.service.user === null 
      ? "Sign Up" 
      : this.service.user.username
  }

  get refProfileOrSignup() {
    return this.service.user === null 
      ? 'signup'
      : 'profile'
  }

  loginOrLogout() {
    return this.service.user === null 
      ? "Login" 
      : "Logout"
  }

  get refLoginOrLogout() {
    return this.service.user === null 
      ? "login" 
      : "logout"
  }

  clickLogout() {
    if (this.service.user !== null)
      this.service.logout()
      this.location.path('login')
  }
}

export const ftNavBar = {
  controller,
  templateUrl,
  controllerAs: 'navbar'
}
