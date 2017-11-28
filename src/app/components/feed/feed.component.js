import 'app/components/feed/feed.style'
import templateUrl from 'app/components/feed/feed'

const controller =
  class FeedController {
    constructor($log, $state, userService, tweetService) {
      'ngInject'
      this.userService = userService
      this.$state = $state
      this.tweetService = tweetService
    }
  }

export const ftFeed = {
  controller,
  templateUrl,
  controllerAs: 'feed'
}
