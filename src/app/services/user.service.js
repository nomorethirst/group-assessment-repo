import { userTestData } from 'app/services/user.service.test.data'

export class UserService {
    user = null

    constructor ($log) {
        'ngInject'
        this.logger = $log
        this.logger.log('userService is a go')
        // this.restoreState()
        }

        authenticate(credentials) {
            return userTestData.credentials.find(e => e.username === credentials.username
                                            && e.password === credentials.password) !== undefined
        // return window.localStorage.getItem(username) === password
        }

        isAuthenticated() {
            return this.user !== null
        }

        login(credentials) {
            this.credentials = credentials
            this.user = userTestData.users.find(e => e.username === credentials.username)
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
            return userTestData.users
        }

        getUserByUsername(username) {
            return userTestData.users.find(e => e.username = username)
        }

        createUser(credentials, profile) {
            userTestData.credentials.push(credentials)
            userTestData.users.push({
                username: credentials.username,
                profile,
                timestamp: Date.now()
            })
        }

        // please include all fields (email, firstName, lastName, phone) in profile (null if no value)
        patchUser(credentials, profile) {
            if (!this.authenticate(credentials)) {
                return null
            }
            this.user = Object.assign(this.user, {profile})
        }
}