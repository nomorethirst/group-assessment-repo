import templateUrl from 'app/components/hashtagPage/searchBar/searchBar.template'
import 'app/app.styles'

const controller = class SearchBarController {
  constructor ($scope, hashtagService) {
    'ngInject'
    this.service = hashtagService
    this.foundTweets = []
    this.randomTweets = []
  }
  
  get findTweets() {
  	this.foundTweets = this.service.getByLabel(this.hashtag)
  }

  get allHashtags() {
  	let randomTagList = []
  	let allHashTags = this.service.getAll()
  	let i = 0;
    while (i < 6) {
      let tempTag = allHashTags[Math.floor((Math.random() * allHashTags.length))]
      if (randomTagList.includes(tempTag)) {
      	tempTag = allHashTags[Math.floor((Math.random() * allHashTags.length))]
      } else {
        randomTagList.push(tempTag)
        i++;
      }
    }
    this.randomTweets = randomTagList
  }
}

export const ftSearchBar = {
  controller,
  templateUrl,
  controllerAs: 'searchBar'
}