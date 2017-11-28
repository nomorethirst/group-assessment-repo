import 'app/components/profile/profile.styles'
import templateUrl from 'app/components/profile/profile.template'

const controller =
  class FtProfileController {
    constructor ($log, $location, userService) {
      'ngInject'
      this.service = userService
      this.username = userService.user.username
      this.password = userService.credentials.password
      this.email = userService.user.profile.email
      this.firstName = userService.user.profile.firstName
      this.lastName = userService.user.profile.lastName
      this.phone = userService.user.profile.phone
      this.location = $location
      $log.log('ft-profile is a go')
    }

    updateProfile() {
      if (this.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i) === null) {
        window.alert(`Invalid email address: '${this.email}' - try again.`)
        this.email = ""
        document.getElementById("email").focus()
        return
      }
      let result = this.service.patchUser({
          username: this.username,
          password: this.password
        }, {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          phone: this.phone
        })
      if (result) {
        window.alert("Profile updated successfully.")
      } else {
        window.alert("Something went wrong - unable to update profile.")
      }
    }
  }

export const ftProfile = {
  controller,
  templateUrl,
  controllerAs: 'profile'
}