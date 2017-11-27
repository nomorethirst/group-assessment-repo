import 'app/header.styles'
import templateUrl from 'app/header.template'

const controller =
  class FtHeaderController {
    constructor ($log, appService) {
      'ngInject'
      this.service = appService
      $log.log('ft-header is a go')
    }

    get total () {
      return this.service.total
    }
  }

export const ftHeader = {
  controller,
  templateUrl,
  controllerAs: 'header'
}
