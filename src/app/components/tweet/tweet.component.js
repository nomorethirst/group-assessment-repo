import 'app/components/tweet/tweet.style'
import templateUrl from 'app/components/tweet/tweet'

const tweet =
  class TweetController {
    constructor($log, $state, userService, TweetService) {
      'ngInject'
      this.userService = userService
      this.$state = $state
      this.tweetService = TweetService
    }
  }

export const ftTweet = {
  controller,
  templateUrl,
  controllerAs: 'tweet'
}
