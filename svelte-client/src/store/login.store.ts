import { writable } from "svelte/store";

import loginApi from "../data/api/login.api";
import type { Auth } from "../data/model/auth.model";

import { Error, Loading, NetworkResult, Success } from "./network-result";

export const auth = writable<NetworkResult<Auth>>(undefined)

export const authorincate = async (username: string, password: string) => {
    auth.set(new Loading())
    try {
        const result = await loginApi.athorincate(username, password)
        auth.set(new Success(result))
    }
    catch(e: any) {
        auth.set(new Error(e.message))
    }
}