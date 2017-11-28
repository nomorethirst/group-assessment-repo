import 'app/components/feed/feed.style'
import templateUrl from 'app/components/feed/feed'

const controller =
  class FeedController {
    constructor($log, $state, userService, tweetService) {
      'ngInject'
      this.userService = userService
      this.$state = $state
      this.tweetService = tweetService
      this.tweets = [{
          "id": "1",
          "author": "swagdaddy",
          "posted": "123456789",
          "content": "This is a tweet",
          "inReplyTo": {},
          "repostOf": {}
        },
        {
          "id": "1",
          "author": "swagdaddy",
          "posted": "123456789",
          "content": "Tweet number 2 baby!",
          "inReplyTo": {},
          "repostOf": {}
        }
      ]



    }
  }

export const ftFeed = {
  controller,
  templateUrl,
  controllerAs: 'feed'
}
