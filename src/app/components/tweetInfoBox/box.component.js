import 'app/components/tweetInfoBox/box.style'
import templateUrl from 'app/components/tweetInfoBox/box'

const controller =
  class BoxController {
    constructor($log, $state, userService, tweetService, $sce, $scope) {
      'ngInject'
      this.userService = userService
      this.$state = $state
      this.tweetService = tweetService
      this.$onInit = () => {
        console.log("boxxed up!")
      }
    }
  }

export const ftBox = {
  controller,
  templateUrl,
  controllerAs: 'box',
  bindings: {
    data: '='
  }
}
