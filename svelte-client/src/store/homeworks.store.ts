import { writable } from "svelte/store";
import homeworkApi from "../data/api/homework.api";
import type { HomeworkDetails, HomeworkModel } from "../data/model/homework.model";
import { Error, Loading, NetworkResult, Success }  from './network-result';

type Empty = HomeworkModel[]

const _homeworks = writable<NetworkResult<HomeworkModel>>(Loading)

const homeworks = () => _homeworks

const fetch = async () => {
    _homeworks.set(new Loading())
    const result = await homeworkApi.getHomeworks()
    _homeworks.set(new Success(result))
}

const detailOf = (id: string) => {
    const store = writable<NetworkResult<HomeworkDetails>>(new Loading())

    homeworkApi.getHomeworkDetails(id)
        .then(value => {
            store.set(new Success(value))
        })
        .catch(reason => {
            store.set(new Error(reason))
        })

    return store
}

export default {
    homeworks,
    fetch,
    detailOf
}