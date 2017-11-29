import 'app/components/mentions/mentions.styles'
import templateUrl from 'app/components/mentions/mentions.template'

const controller = class FtMentions {
  constructor($log, userService) {
    'ngInject'
    this.userService = userService
    this.username = userService.user.username
    $log.debug('ft-mentions is a go')
    this.userMentionsList = []
  }


  getMentions() {
  	return this.userService.getMentions(this.username).then(response => {
  	  this.userMentionsList = response.data
  	})
  }

}


export const ftMentions = {
    controller,
    templateUrl,
    controllerAs: 'mentions',
    /*binding: {
      mentions : '='
    }*/
  }