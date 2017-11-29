import templateUrl from 'app/components/landingPage/tweetAll/tweetAll.template'

const controller = class TweetAllController {
  constructor($log, tweetService) {
    'ngInject'
    this.service = tweetService
    this.tweetList = this.service.getAll()
    this.search = ""
  }

  tweetFilter() {
    this.tweetList = tweetList.filter(tweets => tweets.label.includes(this.search))
    log(tweetList)
  }
}



export const tweetAll = {
  controller,
  templateUrl,
  controllerAs: 'tweetAll',
  binding: {
    allTweets: '='
  }
}