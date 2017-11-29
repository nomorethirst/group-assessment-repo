import templateUrl from 'app/components/userWidget/userWidget.template'

const controller = class UserWidgetController {
  constructor($log, userService) {
    'ngInject'
    this.service = userService
    this.logger = $log
  }
}

export const ftUserWidget = {
  controller,
  templateUrl,
  controllerAs: 'ftUserWidget',
  bindings: {
  	userWidget: '='
  }
}