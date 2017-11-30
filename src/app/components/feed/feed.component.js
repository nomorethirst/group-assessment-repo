import 'app/components/feed/feed.style'
import templateUrl from 'app/components/feed/feed'

const controller =
  class FeedController {
    constructor($log, $state, userService, tweetService, $sce, $scope) {
      'ngInject'
      this.userService = userService
      this.$state = $state
      this.tweetService = tweetService

      this.newTweet = () => {
        this.tweetService.post({
          "content": this.newTweetText,
          "credentials": this.credentials
        })
        userService.getFeed().then((response) => {
          let tweets = response.data
          console.log($scope.tweets)
          $scope.tweets = response.data;
        })
      }



      this.$onInit = () => {
        this.userService.saveUserData({
          followers: this.userFollowers.data,
          following: this.userFollowing.data,
          mentions: this.userMentions.data
        })
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
        })
      }
    }
  }






export const ftFeed = {
  controller,
  templateUrl,
  controllerAs: 'feed',
  bindings: {
    userMentions: '=',
    userFollowers: '=',
    userFollowing: '='
  }
}
