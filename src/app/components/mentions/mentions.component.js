import 'app/app.styles'
import templateUrl from 'app/components/mentions/mentions.template'

const controller = class FtMentions {
  constructor($log, appService) {
    'ngInject'
    this.service = appService
    $log.debug('ft-mentions is a go')
  }

}


export const ftMentions = {
    controller,
    templateUrl,
    controllerAs: 'mentions',
    binding: {
      tweet : '='
    }
  }