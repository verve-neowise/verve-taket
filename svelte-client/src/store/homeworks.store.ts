import { writable } from "svelte/store";
import homeworkApi from "../data/api/homework.api";
import { HomeworkDetails, HomeworkModel, Message } from "../data/model/homework.model";
import { Error, Loading, NetworkResult, Success }  from '../data/network-result';

type Empty = HomeworkModel[]

export const current = writable<HomeworkModel>(undefined)
export const homeworks = writable<NetworkResult<HomeworkModel>>(new Loading())
export const details = writable<NetworkResult<HomeworkDetails>>(new Loading())

export const messages = writable<NetworkResult<Message[]>>()

export const fetch = async () => {
    homeworks.set(new Loading())
    const result = await homeworkApi.getHomeworks()
    homeworks.set(new Success(result))
}

export const changeHomework = async (homework: HomeworkModel) => {
    details.set(new Loading())
    messages.set(new Loading())
    const result = await homeworkApi.getHomeworkDetails(homework.id)
    const msgs = [
        new Message("01.02.30", "Lorem ipsum hello app, this is first message"),
        new Message("01.02.30", "Lorem ipsum hello app, this is first message"),
        new Message("01.02.30", "Lorem ipsum hello app, this is first message"),
        new Message("01.02.30", "Lorem ipsum hello app, this is first message"),
    ]
    details.set(new Success(result))
    messages.set(new Success(msgs))
}