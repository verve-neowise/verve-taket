import { writable } from "svelte/store";

import loginApi from "../data/api/login.api";
import type { Auth } from "../data/model/auth.model";

import { Error, Loading, NetworkResult, Success } from "../data/network-result";

export const auth = writable<NetworkResult<Auth>>(loadStorageData())

export const logOut = () => {
    clearStorageData()
    auth.set(undefined)
}

export const authorincate = async (username: string, password: string) => {
    auth.set(new Loading())
    try {
        const result = await loginApi.athorincate(username, password)
        auth.set(new Success(result))
        saveStorageData(result)
    }
    catch(e: any) {
        auth.set(new Error(e.message))
    }
}

function clearStorageData() {
    localStorage.removeItem("user")
}

function saveStorageData(auth: Auth) {
    localStorage.setItem("user", JSON.stringify(auth))
}

function loadStorageData() {
    let auth = JSON.parse(localStorage.getItem("user")) as Auth
    if (auth) {
        return new Success(auth)
    }
    else {
        return undefined
    }
}