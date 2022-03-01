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

export enum Role {
    USER,
    ADMIN
}

export class Auth {
    user: User
    message: string
    role: Role
    token?: string

    constructor(user: User, role: Role, message: string, token?: string) {
        console.log('role', role);
        this.user = user
        this.role = role
        this.message = message
        this.token = token
     }

    isAuthorized() {
        return this.token ? true : false
    }
}