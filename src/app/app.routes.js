export function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject'
  const welcomeState = {
    name: 'welcome',
    url: '/welcome',
    component: 'ftLandingPage',
    resolve: {
      allTweets: function (tweetService) {
        return tweetService.getAll()
      },
      allUsers: function (userService) {
        return userService.getUsers()
      }
    }
  }
  const hashtagState = {
    name: 'hashtag',
    url: '/hashtag',
    component: 'ftHashtag'
  }
  const loginState = {
    name: 'login',
    url: '/login',
    component: 'ftLogin'
  }
  const signupState = {
    name: 'signup',
    url: '/signup',
    component: 'ftSignUp'
  }
  const profileState = {
    name: 'profile',
    url: '/profile',
    component: 'ftProfile'
  }
  const feedState = {
    name: 'feed',
    url: '/feed',
    component: 'ftFeed',
    resolve: {
      userFollowers: function(userService) {
        return userService.getFollowers();
      },
      userFollowing: function(userService) {
        return userService.getFollowing();
      },
      userMentions: function(userService) {
        return userService.getMentions();
      }
    }
  }
  const userBlurbState = {
    name: 'userblurb',
    url: '/userblurb',
    component: 'ftUserBlurb'
  }

  const followersState = {
    name: 'followers',
    url: '/users/@{username}/followers',
    component: 'ftFollowers',
    resolve: {
      followers: function(userService, $transition$) {
        return userService.getFollowers($transition$.params().username);
      }
    }
  }
  const followingState = {
    name: 'following',
    url: '/users/@{username}/following',
    component: 'ftFollowing',
    resolve: {
      following: function(userService, $transition$) {
        return userService.getFollowing($transition$.params().username);
      }
    }
  }
  const mentionsState = {
    name: 'mentions',
    url: '/users/@{username}/mentions',
    component: 'ftMentions',
    resolve: {
      mentions: function(userService, $transition$) {
        return userService.getMentions($transition$.params().username);
      }
    }
  }
  const userPageState = {
    name: 'userPage',
    url: '/users/@{username}/profile',
    component: 'ftUserPage'
  }

  $locationProvider.html5Mode(true)

  $urlRouterProvider.otherwise('/welcome')
  $stateProvider.state(welcomeState)
  $stateProvider.state(signupState)
  $stateProvider.state(profileState)
  $stateProvider.state(loginState)
  $stateProvider.state(feedState)
  $stateProvider.state(hashtagState)
  $stateProvider.state(userBlurbState)
  $stateProvider.state(followersState)
  $stateProvider.state(followingState)
 // $stateProvider.state(likesState)
  $stateProvider.state(mentionsState)
  $stateProvider.state(userPageState)
}