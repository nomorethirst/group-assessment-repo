import 'app/components/hashtagPage/styles.css'
import 'app/app.styles'
import templateUrl from 'app/components/hashtagPage/hashtag.template'

const controller = class HashtagController {
  constructor () {
    'ngInject'
  }
}

export const ftHashtag = {
  controller,
  templateUrl,
  controllerAs: 'hashtag'
}