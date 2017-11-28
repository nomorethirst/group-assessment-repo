import 'app/components/login/login.styles'
import templateUrl from 'app/components/login/login.template'

const controller =
  class FtLoginController {
    constructor ($log, $location, userService) {
      'ngInject'
      this.service = userService
      this.location = $location
      this.username = ""
      this.password = ""
      $log.log('ft-login is a go')
    }

    login() {
      if (this.service.authenticate({username: this.username, password: this.password})) {
        this.service.login({username: this.username, password: this.password})
        this.location.path('/feed')
      } else {
        window.alert(`Invalid login for User '${this.username}' - try again, or select 'Sign Up' to create an account.`)
        this.username = ""
        this.password = ""
        document.getElementById("usr").focus()
      }
    }

  }

export const ftLogin = {
  controller,
  templateUrl,
  controllerAs: 'login'
}
