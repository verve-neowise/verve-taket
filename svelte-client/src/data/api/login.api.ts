import { delay } from "../../functions/utils"
import { Auth, User } from "../model/auth.model"
import { UnauthorizedException } from "./errors/unauthorized.ex"


const user = new User('Olimjon Mahmudov', 'Web 140', 'https://api.lorem.space/image/face?hash=47449')

const athorincate = async (username: string, password: string) => {
    await delay(2000)
    if (username === 'admin' && password === '1234') {
        return new Auth(user, '', '1234asdqqAKSjdaNMX')
    }
    else {
        throw new UnauthorizedException('Invalid username or password.')
    }
}

export default {
    athorincate
}
