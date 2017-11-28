export class UserBlurbService {
    
constructor ($log, $http) {
    'ngInject'
    this.logger = $log
    this.$http = $http
    this.logger.log('userBlurbService is a go')
    
    }

userFollowers (username) {
    return this.$http({
      method: 'GET',
      url: 'http://localhost:8081/users/@' + username + '/followers', // may need to be changed
    }).then((response) => {
      return response.data
    }, (response) => {
    })
  }

userFollowing (username) {
   return this.$http({
     method: 'GET',
     url: 'http://localhost:8081/users/@' + username + '/following', // may need to be changed
   }).then((response) => {
     return response.data
   }, (response) => {
   })
 }

userLikes (username) {
    return this.$http({
      method: 'GET',
      url: 'http://localhost:8081/users/@' + username + '/likes', // may need to be changed
    }).then((response) => {
      return response.data
    }, (response) => {
    })
  }

userMentions (username) {
    return this.$http({
      method: 'GET',
      url: 'http://localhost:8081/users/@' + username + '/mentions', // may need to be changed
    }).then((response) => {
      return response.data
    }, (response) => {
    })
  }
  
}