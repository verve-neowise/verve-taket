import { writable } from "svelte/store";
import homeworkApi from "../data/api/homework.api";
import type { HomeworkDetails, HomeworkModel } from "../data/model/homework.model";
import { Error, Loading, NetworkResult, Success }  from './network-result';

type Empty = HomeworkModel[]

export const current = writable<HomeworkModel>(undefined)
export const homeworks = writable<NetworkResult<HomeworkModel>>(new Loading())
export const details = writable<NetworkResult<HomeworkDetails>>(new Loading())

export const fetch = async () => {
    homeworks.set(new Loading())
    const result = await homeworkApi.getHomeworks()
    homeworks.set(new Success(result))
}

export const changeHomework = async (homework: HomeworkModel) => {

    current.set(homework)

    console.log(homework);

    details.set(new Loading())
    const result = await homeworkApi.getHomeworkDetails(homework.id)
    // details.set(new Error('error while loading list.'))
    details.set(new Success(result))
}