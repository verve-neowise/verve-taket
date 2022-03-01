import { delay } from "../../functions/utils"
import { Auth, Role, User } from "../model/auth.model"
import { UnauthorizedException } from "./errors/unauthorized.ex"

const user = new User('Olimjon Mahmudov', 'Web 140', 'https://api.lorem.space/image/face?hash=47449')

const athorincate = async (username: string, password: string) => {
    await delay(2000)
    if (username === 'olimjon' && password === '1234') {
        return new Auth(user, Role.USER, '', '1234asdqqAKSjdaNMX')
    }
    else if (username === 'admin' && password === '1234') {
        return new Auth(user, Role.ADMIN, '', '1234asdqqAKSjdaNMX')
    }
    else {
        throw new UnauthorizedException('Invalid username or password.')
    }
}

export default {
    athorincate
}
