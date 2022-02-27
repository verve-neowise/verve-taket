export class User {
    name: string
    group: string

    constructor(name: string, group: string) {
        this.name = name
        this.group = group
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