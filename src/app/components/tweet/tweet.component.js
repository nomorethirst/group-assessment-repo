import 'app/components/tweet/tweet.style'
import templateUrl from 'app/components/tweet/tweet'

const controller =
  class TweetController {
    constructor($log, $state, userService, tweetService) {
      'ngInject'
      this.userService = userService
      this.$state = $state
      this.tweetService = tweetService
    }


  }

export const ftTweet = {
  controller,
  templateUrl,
  controllerAs: 'tweet',
  bindings: {
    tweet: "="
  }
}
