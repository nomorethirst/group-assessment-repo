import templateUrl from 'app/components/landingPage/tweetAll/tweetAll.template'

const controller = class TweetAllController {
  constructor($log, tweetService) {
    'ngInject'
    this.service = tweetService
    this.logger = $log      
    this.search = ""
    this.tweetList = []
  }

  get allTweets() {
    return this.service.getAll().then(response => {
      this.tweetList = response.data
      return response.data
    })
  }

  convertTime(timeInMillis) {
    return new Date(timeInMillis).toString()
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