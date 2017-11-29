import 'app/components/tweetInfoBox/box.style'
import templateUrl from 'app/components/tweetInfoBox/box'

const controller =
  class BoxController {
    constructor($log, boxService) {
      'ngInject'
      this.service = boxService
    }
  }

export const ftBox = {
  controller,
  templateUrl,
  controllerAs: 'box'
}
