import 'app/components/hashtagPage/styles.css'
import 'app/app.styles'
import templateUrl from 'app/components/hashtagPage/hashtag.template'

const controller = class HashtagController {
  constructor ($log, $stateParams, hashtagService) {
    'ngInject'
    hashtagService.saveOptionalQuery($stateParams.query)
  }
}

export const ftHashtag = {
  controller,
  templateUrl,
  controllerAs: 'hashtag',
  binding:{
    query: '='
  }
}