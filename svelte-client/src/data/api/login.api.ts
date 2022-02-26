import { delay } from "../../functions/utils"

export type AuthResponse = {
    status: number,
    message: string,
    token?: string
}


const athorincate = async (username: string, password: string) => {

    let response: AuthResponse

    if (username === 'neowise' && password === 'parool') {

        response = {
            status: 200,
            message: 'Success',
            token: 'some-token-here'
        }
    }
    else {
        response = {
            status: 401,
            message: 'Unathorized',
        }
    }

    await delay(2000)

    return response
}

export default {
    athorincate
}