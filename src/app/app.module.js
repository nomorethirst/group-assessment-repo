import { AppService } from 'app/app.service'
import uiRouter from 'angular-ui-router'

import { ftApp } from 'app/app.component'
import { ftNavBar } from 'app/components/navbar/navbar.component'

import { config } from 'app/app.config'
import { routing } from 'app/app.routes'

export default ng
  .module('ft.buttons', [uiRouter])
  .service('appService', AppService)
  .component('ftNavBar', ftNavBar)
  .component('ftApp', ftApp)
  .config(config)
  .config(routing)
  .name
