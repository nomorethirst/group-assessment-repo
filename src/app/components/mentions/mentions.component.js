import 'app/components/mentions/mentions.styles'
import templateUrl from 'app/components/mentions/mentions.template'

const controller = class FtMentions {
  constructor($log, tweetService) {
    'ngInject'
    this.tweetService = tweetService
    $log.debug('ft-mentions is a go')
  }

}


export const ftMentions = {
    controller,
    templateUrl,
    controllerAs: 'mentions',
    binding: {
      mentions : '='
    }
  }