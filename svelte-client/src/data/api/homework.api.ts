import { delay } from "../../functions/utils"
import { HomeworkModel } from "../model/homework.model"
import { Status } from "../model/status.enum"

const homeworks = [
    new HomeworkModel('0001', 'Flexbox', Status.success, '5'),
    new HomeworkModel('0002', 'Preprocessors SCSS', Status.wrong, '2'),
    new HomeworkModel('0003', 'Bootstrap', Status.wait, '3'),
    new HomeworkModel('0004', 'Javascript. Problems', Status.neutral),
    new HomeworkModel('0005', 'Javascript. Object and Functions', Status.neutral),
]

export const getHomeworks = async () => {
    await delay(2500)
    return homeworks
}