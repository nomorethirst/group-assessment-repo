import 'app/components/signup/signup.styles'
import templateUrl from 'app/components/signup/signup.template'

const controller =
  class FtSignUpController {
    constructor ($log, $location, userService, validateService) {
      'ngInject'
      this.logger = $log
      this.location = $location
      this.userService = userService
      this.validateService = validateService
      if (this.userService.isAuthenticated()) {
        this.logger.log('ft-signup: user already authenticated, redirecting to feed')
        this.location.path('feed')
      } else {
        this.username = ""
        this.password = ""
        this.email = ""
        this.firstName = ""
        this.lastName = ""
        this.phone = ""
        this.logger.log('ft-signup is a go')
      }
    }

    signup() {
      if (this.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i) === null) {
        window.alert(`Invalid email address: '${this.email}' - try again.`)
        this.email = ""
        document.getElementById("email").focus()
        return
      }
      this.validateService.getUsernameAvailable(this.username)
        .then(result => {
          if (result.data) {
            this.userService.createUser({
                username: this.username,
                password: this.password
              }, {
                email: this.email,
                firstName: this.firstName,
                lastName: this.lastName,
                phone: this.phone
              })
              .then(result => {
                window.alert(`User created`)
                this.location.path('/feed')
              })
              .catch(error => {
                window.alert(`Error creating user.`)
              })
          } else {
            window.alert(`Username '${this.username}' not available - try again.`)
            this.username = ""
            document.getElementById("usr").focus()
            return
          }
        })
        .catch(error => {
          window.alert('Error checking if username exists.')
        })

    }
  }

export const ftSignUp = {
  controller,
  templateUrl,
  controllerAs: 'signup'
}
