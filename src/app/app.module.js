// Third-party libraries/modules
import uiRouter from 'angular-ui-router'

// Services
import { AppService } from 'app/app.service'
import { UserService } from 'app/services/user.service'
import { TweetService } from 'app/services/tweet.service'
import { HashtagService } from 'app/services/hashtag.service'
import { ValidateService } from 'app/services/validate.service'
import { BoxService } from 'app/services/box.service'


// Components
import { ftApp } from 'app/app.component'
import { ftNavBar } from 'app/components/navbar/navbar.component'
import { ftLogin } from 'app/components/login/login.component'
import { ftSignUp } from 'app/components/signup/signup.component'
import { ftProfile } from 'app/components/profile/profile.component'
import { ftFeed } from 'app/components/feed/feed.component'
import { ftTweet } from 'app/components/tweet/tweet.component'
import { ftHashtag } from 'app/components/hashtagPage/hashtag.component'
import { ftSearchBar } from 'app/components/hashtagPage/searchBar/searchBar.component'
import { ftLandingPage } from 'app/components/landingPage/landingPage.component'
import { tweetAll } from 'app/components/landingPage/tweetAll/tweetAll.component'
import { userAll } from 'app/components/landingPage/userAll/userAll.component'
import { ftUserPage } from 'app/components/userPage/userPage.component'
import { ftUserBlurb } from 'app/components/userBlurb/userblurb.component'
import { ftFollowers } from 'app/components/followers/followers.component'
import { ftFollowing } from 'app/components/following/following.component'
import { ftLikes } from 'app/components/likes/likes.component'
import { ftMentions } from 'app/components/mentions/mentions.component'
import { ftBox } from 'app/components/tweetInfoBox/box.component'
import { ftUserWidget } from 'app/components/userWidget/userWidget.component'

//
import { ftUserFeedBlurb } from 'app/components/feedblurb/feedblurb.component'
//



// Config
import { config } from 'app/app.config'
import { routing } from 'app/app.routes'

export default ng
  .module('ft.twitter', [uiRouter])
  .service('appService', AppService)
  .service('userService', UserService)
  .service('tweetService', TweetService)
  .service('hashtagService', HashtagService)
  .service('validateService', ValidateService)
  .service('boxService', BoxService)
  .component('ftNavBar', ftNavBar)
  .component('ftApp', ftApp)
  .component('ftLogin', ftLogin)
  .component('ftSignUp', ftSignUp)
  .component('ftProfile', ftProfile)
  .component('ftFeed', ftFeed)
  .component('ftTweet', ftTweet)
  .component('ftHashtag', ftHashtag)
  .component('ftSearchBar', ftSearchBar)
  .component('ftLandingPage', ftLandingPage)
  .component('tweetAll', tweetAll)
  .component('userAll', userAll)
  .component('ftUserPage', ftUserPage)
  .component('ftUserBlurb', ftUserBlurb)
  .component('ftFollowers', ftFollowers)
  .component('ftFollowing', ftFollowing)
  .component('ftLikes', ftLikes)
  .component('ftMentions', ftMentions)
  .component('ftBox', ftBox)
  .component('ftUserWidget', ftUserWidget)
  //
  .component('ftUserFeedBlurb', ftUserFeedBlurb)
  //
  .config(config)
  .config(routing)
  .name
