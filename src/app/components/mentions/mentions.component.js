import 'app/components/mentions/mentions.styles'
import templateUrl from 'app/components/mentions/mentions.template'

const controller = class FtMentions {
  constructor($log, userService, tweetService) {
    'ngInject'
    this.userService = userService
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