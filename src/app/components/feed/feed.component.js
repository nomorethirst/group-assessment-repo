import 'app/components/feed/feed.style'
import templateUrl from 'app/components/feed/feed'

const controller =
  class FeedController {
    constructor($log, $state, userService, tweetService, $sce) {
      'ngInject'
      this.userService = userService
      this.$state = $state
      this.tweetService = tweetService
      let tempTweets = [{
          "id": "1",
          "author": "swagdaddy",
          "posted": "123456789",
          "content": "This is a super #cool tweet",
          "inReplyTo": {},
          "repostOf": {}
        },
        {
          "id": "2",
          "author": "swagdaddy",
          "posted": "123456789",
          "content": "Tweet number 2 baby!",
          "inReplyTo": {},
          "repostOf": {}
        },
        {
          "id": "3",
          "author": "swagdaddy",
          "posted": "123456789",
          "content": "One more time for the #fans of the #world",
          "inReplyTo": {},
          "repostOf": {}
        }
      ]
      let position = 0;
      tempTweets.forEach(x => {
        let builder = "<p>"
        x.content.split(" ").forEach(y => builder += y.startsWith("#") ? y.replace("#", "<a href='hashtag/") + "'>" + y + "</a> " : y + " ")
        builder += "</p>"
        console.log(builder)
        tempTweets[position].content = $sce.trustAsHtml(builder);
        console.log(tempTweets[position])
        position++;
      })
      this.newTweetText = ""
      this.tweets = tempTweets
    }

    newTweet = () => console.log(this.newTweetText)
  }

export const ftFeed = {
  controller,
  templateUrl,
  controllerAs: 'feed'
}
