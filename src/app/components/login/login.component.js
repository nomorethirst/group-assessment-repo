import 'app/components/login/login.styles'
import templateUrl from 'app/components/login/login.template'

const controller =
  class FtLoginController {
    constructor ($log, $location, userService) {
      'ngInject'
      this.logger = $log
      this.location = $location
      this.userService = userService
      if (this.userService.isAuthenticated()) {
        this.location.path('feed')
        this.logger.log('ft-login: user already authenticated, redirecting to feed')
      } else {
        this.username = ""
        this.password = ""
        this.logger.log('ft-login is a go')
      }
    }

    login() {
      this.userService.login({username: this.username, password: this.password})
        .then(result => {
          this.location.path('/feed')
        })
        .catch(error => {
          window.alert(`Invalid login for User '${this.username}' - try again, or select 'Sign Up' to create an account.`)
          this.username = ""
          this.password = ""
          document.getElementById("usr").focus()
        })
    }

  }

export const ftLogin = {
  controller,
  templateUrl,
  controllerAs: 'login'
}
