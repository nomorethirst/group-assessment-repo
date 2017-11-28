import templateUrl from 'app/components/hashtagPage/searchBar/searchBar.template'
import 'app/app.styles'

const controller = class SearchBarController {
  constructor (hashtagService, $anchorScroll, $location) {
    'ngInject'
    this.service = hashtagService
  }

  gotoBottom() {
    this.$location.hash('hashtagResult')
    this.$anchorScroll();
  }

  get findTweets() {
  	this.gotoBottom();
  	return this.service.tweets(this.hashtag)
  }

  get allHashtags() {
  	let randomTagList = []
  	let allHashTags = this.service.allHashtags()
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
    return randomTagList;
  }
}

export const ftSearchBar = {
  controller,
  templateUrl,
  controllerAs: 'searchBar'
}