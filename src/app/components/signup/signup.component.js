import 'app/components/signup/signup.styles'
import templateUrl from 'app/components/signup/signup.template'

const controller =
  class FtSignUpController {
    constructor ($log, $location, userService) {
      'ngInject'
      this.service = userService
      this.location = $location
      this.username = ""
      this.password = ""
      this.email = ""
      this.firstName = ""
      this.lastName = ""
      this.phone = ""
      $log.log('ft-signup is a go')
    }

    signup() {
      this.service.usernameExists(this.username)
        .then(result => {
          if (result.data) {
            window.alert(`User '${this.username}' already exists - try again.`)
            this.username = ""
            document.getElementById("usr").focus()
            return
          }
        })
        .catch(error => {
          window.alert('Error checking if username exists.')
        })

      if (this.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i) === null) {
        window.alert(`Invalid email address: '${this.email}' - try again.`)
        this.email = ""
        document.getElementById("email").focus()
        return
      }
      this.service.createUser({
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
    }
  }

export const ftSignUp = {
  controller,
  templateUrl,
  controllerAs: 'signup'
}
