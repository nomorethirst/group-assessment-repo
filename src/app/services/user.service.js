import { userTestData } from 'app/services/user.service.test.data'

export class UserService {
    user = null
    credentials = null

    constructor ($log, $http) {
        'ngInject'
        this.logger = $log
        this.logger.log('userService is a go')
        this.http = $http
        this.userTestData = userTestData
        this.baseUrl = 'http://localhost:8080/api'
        // this.restoreState()
        }

        authenticate(credentials) {
            return this.userTestData.credentials.find(e => e.username === credentials.username
                                            && e.password === credentials.password) !== undefined
        // return window.localStorage.getItem(username) === password
        }

        isAuthenticated() {
            return this.user !== null
        }

        login(credentials) {
            this.credentials = credentials
            this.user = this.userTestData.users.find(e => e.username === credentials.username)
        // this.restoreState()
        }

        logout() {
        // this.saveState()
        this.user = null
        }

        getCurrentUser() {
            return this.user
        }

        getUsers() {
            return this.userTestData.users
        }

        getUserByUsername(username) {
            return this.userTestData.users.find(e => e.username === username)
        }

        usernameExistsTest(username) {
            return this.userTestData.users.find(e => e.username === username) !== undefined
        }

        usernameExists(username) {
            return this.http.get(`${this.baseUrl}/validate/username/exists/@${username}`)
                .then(result => {
                    return Promise.resolve(result.data)
                })
                .catch(error => {
                    return Promise.reject(error)
                })
        }

        createUserTest(credentials, profile) {
            this.credentials = credentials
            this.userTestData.credentials.push(this.credentials)
            this.user = {
                username: credentials.username,
                profile,
                timestamp: Date.now()
            }
            this.userTestData.users.push(this.user)
        }

        createUser(credentials, profile) {
            return this.http.post(`${this.baseUrl}/users`, {credentials, profile})
                .then(result => {
                    this.logger.log('userService.createUser result: ', result)
                    this.credentials = credentials
                    this.user = result.data
                    return Promise.resolve(result)
                })
                .catch(error => {
                    this.logger.log('userService.createUser error: ', error)
                    return Promise.reject(error)
                })
        }

        // please include all fields (email, firstName, lastName, phone) in profile (null if no value)
        patchUser(credentials, profile) {
            if (!this.authenticate(credentials)) {
                return null
            }
            this.user = Object.assign(this.user, {profile})
        }

        getFeed(){
            return this.http.get('http://' + HOST + ':' + PORT + '/users/' + this.user.username + '/feed')
        }

        getTweets(){
            return this.http.get('http://' + HOST + ':' + PORT + '/users/' + this.user.username + '/tweets')
        }

        getMentions(){
            return this.http.get('http://' + HOST + ':' + PORT + '/users/' + this.user.username + '/mentions')
        }

        getFollowers(){
            return this.http.get('http://' + HOST + ':' + PORT + '/users/' + this.user.username + '/followers')
        }

        getFollowing(){
            return this.http.get('http://' + HOST + ':' + PORT + '/users/' + this.user.username + '/following')
        }
}