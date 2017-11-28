import templateUrl from 'app/components/landingPage/tweetAll/tweetAll.template'

const controller = class TweetAllController {
  constructor($log, tweetService) {
    'ngInject'
    this.service = tweetService
  }

  // get allTweets() {
  // 	return this.service.tweets();
  // }
}

export const tweetAll = {
  controller,
  templateUrl,
  controllerAs: 'tweetAll',
  binding: {
    allTweets: '='
  }
}