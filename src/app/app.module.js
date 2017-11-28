// Third-party libraries/modules
import uiRouter from 'angular-ui-router'

// Services
import { AppService } from 'app/app.service'
import { UserService } from 'app/services/user.service'

// Components
import { ftApp } from 'app/app.component'
import { ftNavBar } from 'app/components/navbar/navbar.component'
import { ftLogin } from 'app/components/login/login.component'

// Config
import { config } from 'app/app.config'
import { routing } from 'app/app.routes'

export default ng
  .module('ft.twitter', [uiRouter])
  .service('appService', AppService)
  .service('userService', UserService)
  .component('ftNavBar', ftNavBar)
  .component('ftApp', ftApp)
  .component('ftLogin', ftLogin)
  .config(config)
  .config(routing)
  .name
