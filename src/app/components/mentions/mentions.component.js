import 'app/components/mentions/mentions.styles'
import templateUrl from 'app/components/mentions/mentions.template'

const controller = class FtMentions {
  constructor($log, userService, $state) {
    'ngInject'
    this.userService = userService
    this.state = $state;
		this.username = this.state.params.username
    $log.debug('ft-mentions is a go')
    this.userMentionsList = []
  }


getMentions() {
  	return this.userService.getMentions(this.username).then(response => {
  	  this.userMentionsList = response.data
  	})
  }


convertTime(timeInMillis) {
  var options = {  
  hour: "2-digit", minute: "2-digit", weekday: "short",
  year: "numeric", month: "short", day: "numeric"  
}  
  return new Date(timeInMillis).toLocaleTimeString("en-us", options)
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