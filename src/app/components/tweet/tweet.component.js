import 'app/components/tweet/tweet.style'
import templateUrl from 'app/components/tweet/tweet'

const controller =
  class TweetController {
    constructor($log, $state, userService, tweetService, $sce, $scope, boxService) {
      'ngInject'
      this.userService = userService
      this.$state = $state
      this.tweetService = tweetService
      this.boxService = boxService
      this.$onInit = () => {
        this.boxService.saveBoxData("", 0);
        this.tweetService.getLikesById(this.tweet.id).then((result) => $scope.likes = result.data);
        this.tweetService.getRepostById(this.tweet.id).then((result) => $scope.retweets = result.data)
        this.tweetService.getContextById(this.tweet.id).then((result) => $scope.after = result.data.after)
        let builder = "<p>"
        this.tweet.content.split(" ").forEach(y => builder += y.startsWith("#") ? y.replace("#", "<a href='hashtag/") + "'>" + y + "</a> " : y.startsWith("@") ? y.replace("@", '<a ui-sref="userPage({username: @' + y + '})">' +
          y + ' </a>') : y + " ")
        builder += "</p>"
        this.tweet.content = $sce.trustAsHtml(builder);
      }

      this.newTweetText = ""

      this.likeTweet = () => {
        this.tweetService.like(this.tweet.id, this.userService.credentials)
        console.log("Like tweet")
      }

      this.openBox = (num) => {
        console.log(num)
        switch (num) {
          case 1:
            this.tweetService.getLikesById(this.tweet.id).then((data) => this.boxService.saveBoxData(data.data, num))
            break;
          case 2:
            this.tweetService.getRepostById(this.tweet.id).then((data) => this.boxService.saveBoxData(data.data, num))
            break;
          case 3:
            this.tweetService.getContextById(this.tweet.id).then((result) => this.boxService.saveBoxData(result.data.after, num))
            break;
          case 4:
            this.tweetService.reply(this.tweet.id, {
              "content": "This will be a reply",
              "credentials": this.userService.credentials
            })
            break;
          case 5:
            this.tweetService.repost(this.tweet.id, this.userService.credentials)
            break;

        }
        if (num == 4 || num == 5)
          location.reload();
      }
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
