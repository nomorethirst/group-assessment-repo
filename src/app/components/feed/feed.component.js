import 'app/components/feed/feed.style'
import templateUrl from 'app/components/feed/feed'

const controller =
  class FeedController {
    constructor($log, $state, userService, tweetService, $sce, $scope) {
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



      if (!this.userService.isAuthenticated()) {
        $state.go('welcome')
        this.logger.log('ft-profile: user not authenticated, redirecting to feed')
      } else {
        this.user = this.userService.user
        this.credentials = this.userService.credentials
      }
      userService.getFeed().then((response) => {
        let tweets = response.data
        console.log($scope.tweets)
        $scope.tweets = response.data;
        let position = 0;
        tweets.forEach(x => {
          let builder = "<p>"
          x.content.split(" ").forEach(y => builder += y.startsWith("#") ? y.replace("#", "<a href='hashtag/") + "'>" + y + "</a> " : y + " ")
          builder += "</p>"
          $scope.tweets[position].content = $sce.trustAsHtml(builder);
          position++;
        })
      })
      this.newTweetText = ""
    }

    newTweet = () => this.tweetService.post({
      "content": this.newTweetText,
      "credentials": this.credentials
    })
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
