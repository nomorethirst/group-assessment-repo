import templateUrl from 'app/components/hashtagPage/searchBar/searchBar.template'
import 'app/app.styles'

const controller = class SearchBarController {
  constructor (hashtagService) {
    'ngInject'
    this.service = hashtagService
    this.foundTweets = []
    this.randomTweets = []
    if(hashtagService.getOptionalQuery() !== undefined){
      this.hashtag = hashtagService.getOptionalQuery()
      this.findTweets
    }
  }
  
  get findTweets() {
  	return this.service.getByLabel(this.hashtag).then((response) => {
      this.foundTweets = response.data
      return response.data
    })
  }

  get allHashtags() {
  	return this.service.getAll().then((response) => {
      this.randomTweets = response.data
      return response.data
    })
  }
}

export const ftSearchBar = {
  controller,
  templateUrl,
  controllerAs: 'searchBar'
}