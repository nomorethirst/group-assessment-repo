export function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject'
  const welcomeState = {
    name: 'welcome',
    url: '/welcome',
    component: 'ftLandingPage'
    // template: '<h1 style="text-align:center;">Welcome to Ft Twitter!</h1>'
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
    component: 'ftFeed'
    // template: '<h1 style="text-align:center;">Main Feed goes here.</h1>'
  }
  const userBlurbState = {
    name: 'userblurb',
    url: '/userblurb',
    component: 'ftUserBlurb'
  }

 const followersState = {
    name: 'followers',
    url: '/followers', //'/{username}/followers',
    component: 'ftFollowers',
    /*resolve: {
      followers: function(userService, $transition$) {
        return userService.getAllFollowers($transition$.params().username);
      }
    }*/
  }

 const followingState = {
    name: 'following',
    url: '/following', //'/{username}/following',
    component: 'ftFollowing',
    /*resolve: {
      followers: function(userService, $transition$) {
        return userService.getAllFollowing($transition$.params().username);
      }
    }*/
  }

 const likesState = {
    name: 'likes',
    url: '/likes', //'/{username}/likes',
    component: 'ftLikes',
    /*resolve: {
      followers: function(userService, $transition$) {
        return userService.getAllLikes($transition$.params().username);
      }
    }*/
  }

 const mentionsState = {
    name: 'mentions',
    url: '/mentions', // '/{username}/mentions',
    component: 'ftMentions',
    /*resolve: {
      followers: function(userService, $transition$) {
        return userService.getAllMentions($transition$.params().username);
      }
    }*/
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
  $stateProvider.state(likesState)
  $stateProvider.state(mentionsState)
}