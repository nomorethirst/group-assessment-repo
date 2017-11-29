import 'app/components/likes/likes.styles'
import templateUrl from 'app/components/likes/likes.template'

const controller = class FtLikesController {
  constructor($log, tweetService) {
    'ngInject'
    this.tweetService = tweetService
    $log.debug('ft-likes is a go')
  }

}


export const ftLikes = {
    controller,
    templateUrl,
    controllerAs: 'likes',
    binding: {
      likes : '='
    }

  }