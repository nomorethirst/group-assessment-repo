import 'app/components/tweet/tweet.style'
import templateUrl from 'app/components/tweet/tweet'

const controller =
  class TweetController {
    constructor($log, $state, userService, tweetService, $sce, $scope, boxService) {
      'ngInject'
      this.userService = userService
      this.commentBoxActive = false;
      this.$state = $state
      this.tweetService = tweetService
      this.boxService = boxService
      this.commentBox = "opacity: 0;"
      this.$onInit = () => {
        this.tweetService.getLikesById(this.tweet.id).then((result) => $scope.likes = result.data);
        this.tweetService.getRepostById(this.tweet.id).then((result) => $scope.retweets = result.data)
        this.tweetService.getRepliesById(this.tweet.id).then((result) => $scope.after = result.data)
        let builder = "<p>"
        this.tweet.content.split(" ").forEach(y => builder +=
          y.startsWith("#") ? y.replace("#", "<a href='hashtag?query=") + "'>" + y + "</a> " :
          y.startsWith("@") ? "<a href='users/" + y + "/profile" + "'>" + y + ' </a>' :
          y + " ")
        builder += "</p>"
        this.tweet.content = $sce.trustAsHtml(builder);
      }

      let commentBoxActive = false;

      this.newTweetText = ""

      this.likeTweet = () => {
        this.tweetService.like(this.tweet.id, this.userService.credentials)
        console.log("Like tweet")
      }

      this.openBox = (num) => {
        console.log(this.tweet.inReplyTo)
        switch (num) {
          case 1:
            this.tweetService.getLikesById(this.tweet.id).then((data) => this.boxService.saveBoxData(data.data, num))
            break;
          case 2:
            this.tweetService.getRepliesById(this.tweet.id).then((data) => this.boxService.saveBoxData(data.data, num))
            break;
          case 3:
            this.tweetService.getRepostById(this.tweet.id).then((result) => this.boxService.saveBoxData(result.data, num))
            break;
          case 4:
            this.commentBoxActive = !this.commentBoxActive;
            break;
          case 5:
            this.tweetService.repost(this.tweet.id, this.userService.credentials)
            break;
          case 6:
            console.log(this.commentBoxActive)
            this.tweetService.reply(this.tweet.id, {
              "content": this.replyBody,
              "credentials": this.userService.credentials
            })
            break;
        }
        if (num == 5)
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
