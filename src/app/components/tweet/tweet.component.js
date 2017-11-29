import 'app/components/tweet/tweet.style'
import templateUrl from 'app/components/tweet/tweet'

const controller =
  class TweetController {
    constructor($log, $state, userService, tweetService, $sce) {
      'ngInject'
      this.userService = userService
      this.$state = $state
      this.tweetService = tweetService
      this.hasOpenBox = false;
      this.box = ""
      this.$onInit = () => {
        let builder = "<p>"
        this.tweet.content.split(" ").forEach(y => builder += y.startsWith("#") ? y.replace("#", "<a href='hashtag/") + "'>" + y + "</a> " : y + " ")
        builder += "</p>"
        this.tweet.content = $sce.trustAsHtml(builder);
      }
      this.newTweetText = ""
    }
  }
let openBox = (num) => {
  console.log("Clicked something! " + num)
  if (this.hasOpenBox) {
    this.box = ""
    this.hasOpenBox = false;
  } else {
    this.box = $sce.trustAsHtml("<ft-box data=" + num + " ></ft-box>")
    this.hasOpenBox = true;
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
