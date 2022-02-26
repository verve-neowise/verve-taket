import { delay } from "../../functions/utils"
import { HomeworkDetails, HomeworkModel, Problem } from "../model/homework.model"
import { Status } from "../model/status.enum"

const homeworks = [
    new HomeworkModel('0001', 'Flexbox', Status.success, '5'),
    new HomeworkModel('0002', 'Preprocessors SCSS', Status.wrong, '2'),
    new HomeworkModel('0003', 'Bootstrap', Status.wait, '3'),
    new HomeworkModel('0004', 'Javascript. Problems', Status.neutral),
    new HomeworkModel('0005', 'Javascript. Object and Functions', Status.neutral),
]

const getHomeworks = async () => {
    await delay(1500)
    return homeworks
}

const getHomeworkDetails = async ( id: string ) => {
    await delay(1000)
    
    const homework = homeworks.find(model => model.id === id)

    return new HomeworkDetails(
        homework.id,
        homework.name, 
        homework.status,
        homework.rate,
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quod quaerat impedit quam facere rerum. Rem, excepturi. Delectus laboriosam blanditiis eos expedita officiis id asperiores, ad adipisci assumenda quia cupiditate?",
        "Fugiat quod quaerat impedit quam facere rerum. Rem, excepturi.",
        [ 
            new Problem("index.html", "Write a index.html with Bootstrap css framework!"),
            new Problem("style.scss", "Write a style.css styles with sass preprocessor!")
        ]
    )
}

export default {
    getHomeworks,
    getHomeworkDetails
}