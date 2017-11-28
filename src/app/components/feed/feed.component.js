import 'app/components/feed/feed.style'
import templateUrl from 'app/components/feed/feed'

const feed =
  class FeedController {
    constructor($log, $state, userService, TweetService) {
      'ngInject'
      this.userService = userService
      this.$state = $state
      this.tweetService = TweetService
    }
  }

export const ftFeed = {
  controller,
  templateUrl,
  controllerAs: 'feed'
}
