import { getHomeworks } from "../data/api/homework.api";
import type { HomeworkModel } from "../data/model/homework.model";
import { writable } from "svelte/store";
import { Loading, Success, NetworkResult, Error }  from './network-result';

type Empty = HomeworkModel[]

const _homeworks = writable<NetworkResult<Empty>>(Loading)

export const homeworks = () => _homeworks

export const fetch = async () => {
    _homeworks.set(Loading)
    const result = await getHomeworks()
    _homeworks.set(result)
}