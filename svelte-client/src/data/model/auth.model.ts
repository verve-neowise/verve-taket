export class User {
    name: string
    group: string
    avatar: string

    constructor(name: string, group: string, avatar: string) {
        this.name = name
        this.group = group
        this.avatar = avatar
    }
}

export class Auth {
    user: User
    message: string
    token?: string

    constructor(user: User, message: string, token?: string) {
        this.user = user
        this.message = message
        this.token = token
     }

    isAuthorized() {
        return this.token ? true : false
    }
}