export interface NetworkResult<T> {
}

class LoadingResult<T> implements NetworkResult<T> {
}

export const Loading = new LoadingResult()

export class Error<T> implements NetworkResult<T> {

    constructor(private _message: string) {}

    get message () {
        return this._message
    }
}

export class Success<T> implements NetworkResult<T> {

    constructor(private _result: T) {}

    get result() {
        return this._result
    }
}
