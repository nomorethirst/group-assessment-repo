import 'app/components/feed/feed.style'
import templateUrl from 'app/components/feed/feed'

const controller =
  class FeedController {
    constructor($log, $state, userService, tweetService, $scope) {
      'ngInject'
      this.userService = userService
      this.$state = $state
      this.tweetService = tweetService
      this.$onInit = () => {
        $log.log(this.userFollowers)
        this.userService.saveUserData({
          followers: this.userFollowers.data,
          following: this.userFollowing.data,
          mentions: this.userMentions.data
        })
    }
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
  controllerAs: 'feed',
  bindings:{
    userMentions: '=',
    userFollowers: '=',
    userFollowing: '='
  }
}
