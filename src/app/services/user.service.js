import userData from 'app/services/1000users.json'

export class UserService {
    user = null
    credentials = null

    constructor ($log, $http, validateService, tweetService) {
        'ngInject'
        this.logger = $log
        this.http = $http
        this.validateService = validateService
        this.tweetService = tweetService
        this.baseUrl = 'http://localhost:8080'
        this.userData = null
        this.restoreState()
        this.logger.log('userService is a go')
        // uncomment the following line to load n<=1000 test users
        // this.loadTestUsers(100)
        }

        loadTestUsers(max) {
            let n = max < userData.length ? max : userData.length
            for (let i = 0; i < n; i++) {
                let u = userData[i]
                let credentials = {username: u.username, password: u.password}
                let profile = {
                    email: u.email,
                    firstName: u.firstName,
                    lastName: u.lastName,
                    phone: u.phone
                }
                this.createUser(credentials, profile)
                    .then(result => {
                        this.logger.log(`Created test user ${result.data.username}.`)
                    })
                    .catch(error => {
                        this.logger.log("Error creating test user.")
                    })

                let tokens = u.tweet.split(' ')
                // 1 random hashtag
                let j = Math.floor(Math.random() * tokens.length)
                tokens[j] = "#".concat(tokens[j])
                // 1 random mention of user already created
                j = Math.floor(Math.random() * i)
                tokens.push("@" + userData[j].username)
                let content = tokens.join(' ')
                this.tweetService.post({content, credentials})
                    .then(result => {
                        this.logger.log(`Created test tweet id '${result.data.id}'.`)
                    })
                    .catch(error => {
                        this.logger.log("Error creating test tweet.")
                    })
            }
        }

        saveUserData(userData){
            this.userData = userData
        }

        getUserData(){
            return this.userData
        }

        saveState() {
            let state = {
                credentials: this.credentials,
                user: this.user
            }
            this.logger.log('saving userState', state)
            window.localStorage.setItem('userState', JSON.stringify(state))
        }

        restoreState() {
            let state = JSON.parse(window.localStorage.getItem('userState'))
            if (state) {
                this.logger.log('restoring userState', state)
                this.credentials = state.credentials
                this.user = state.user
            }
        }

        clearState() {
            this.logger.log('clearing userState')
            window.localStorage.clear('userState')
        }

        isAuthenticated() {
            return this.user !== null
        }

        login(credentials) {
            // validate credentials, get user, set user and credentials
            return this.validateService.getCredentialsCheck(credentials)
                .then(result => {
                    this.logger.log(result)
                    if (!result.data) {
                        this.logger.log(`userService.login(): invalid credentials: `, credentials)
                        return Promise.reject()
                    }
                    return this.getUser(credentials.username)
                        .then(result => {
                            this.user = result.data
                            this.credentials = credentials
                            this.saveState()
                            this.logger.log(`User '${this.user.username}' logged in.`)
                            return Promise.resolve(result)
                        })
                        .catch(error => {
                            return Promise.reject(error)
                        })
                    return Promise.resolve(result)
                })
                .catch(error => {
                    return Promise.reject(error)
                })
        }

        logout() {
        this.user = null
        this.credentials = null
        this.clearState()
        }

        getCurrentUser() {
            return this.user
        }

        createUser(credentials, profile) {
            return this.http.post(`${this.baseUrl}/users`, {credentials, profile})
                .then(result => {
                    this.logger.log('userService.createUser result: ', result)
                    this.credentials = credentials
                    this.user = result.data
                    this.saveState()
                    return Promise.resolve(result)
                })
                .catch(error => {
                    this.logger.log('userService.createUser error: ', error)
                    return Promise.reject(error)
                })
        }

        getUsers(){
            return this.http.get(this.baseUrl + '/users')
        }

        getUser(username = this.user.username) {
            return this.http.get(this.baseUrl + '/users/@' + username)
        }

        deleteUser(credentials = this.credentials) {
            return this.http.delete(`${this.baseUrl}/users/@${this.user.username}`, {credentials})
                .then(result => {
                    this.logger.log('userService.deleteUser result: ', result)
                    this.logout()
                    return Promise.resolve(result)
                })
                .catch(error => {
                    this.logger.log('userService.deleteUser error: ', error)
                    return Promise.reject(error)
                })
        }

        patchUser(credentials = this.credentials, profile) {
            return this.http.patch(`${this.baseUrl}/users/@${this.user.username}`, {credentials, profile})
                .then(result => {
                    this.logger.log('userService.patchUser result: ', result)
                    this.user = result.data
                    return Promise.resolve(result)
                })
                .catch(error => {
                    this.logger.log('userService.patchUser error: ', error)
                    return Promise.reject(error)
                })
        }

        follow(credentials = this.credentials, username) {
            return this.http.post(`${this.baseUrl}/users/@${this.user.username}/follow`, credentials)
        }

        unfollow(credentials = this.credentials, username) {
            return this.http.post(`${this.baseUrl}/users/@${this.user.username}/unfollow`, credentials)
        }

        getFeed(username = this.user.username){
            return this.http.get(this.baseUrl + '/users/@' + username + '/feed')
        }

        getTweets(username = this.user.username){
            return this.http.get(this.baseUrl + '/users/@' + username + '/tweets')
        }

        getMentions(username = this.user.username){
            return this.http.get(this.baseUrl + '/users/@' + username + '/mentions')
        }

        getFollowers(username = this.user.username){
            return this.http.get(this.baseUrl + '/users/@' + username + '/followers')
        }

        getFollowing(username = this.user.username){
            return this.http.get(this.baseUrl + '/users/@' + username + '/following')
        }
}