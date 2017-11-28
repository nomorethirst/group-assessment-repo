export function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject'
  const welcomeState = {
    name: 'welcome',
    url: '/welcome',
    template: '<h1 style="text-align:center;">Welcome to Ft Twitter!</h1>'
  }
  const loginState = {
    name: 'login',
    url: '/login',
    component: 'ftLogin'
  }
  // const signupState = {
  //   name: 'signup',
  //   url: '/signup',
  //   component: 'ftSignUp'
  // }

  $locationProvider.html5Mode(true)

  $urlRouterProvider.otherwise('/welcome')
  $stateProvider.state(welcomeState)
  // $stateProvider.state(signupState)
  $stateProvider.state(loginState)
}