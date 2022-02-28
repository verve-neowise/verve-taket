import { delay } from "../../functions/utils"
import { HomeworkDetails, HomeworkModel, Problem, ProblemType, Resource } from "../model/homework.model"
import { Status } from "../model/status.enum"

const homeworks = [
    new HomeworkModel('0001', 'Flexbox', Status.success, '5'),
    new HomeworkModel('0002', 'Preprocessors SCSS', Status.wrong, '2'),
    new HomeworkModel('0003', 'Bootstrap', Status.send, '3'),
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

    const resources = [
        new Resource('Notion', 'https://notion.so'),
        new Resource('Figma', 'https://figma.com'),
        new Resource('MDN', 'https://developer.mozilla.org/ru/'),
    ]

    const problems = [ 
        new Problem("repository", "Your repository", "Upload all files to github and paste link here", ProblemType.link),
        new Problem("index", "index.html", "Write a index.html with Bootstrap css framework!", ProblemType.code),
        new Problem("style", "style.scss", "Write a style.css styles with sass preprocessor!", ProblemType.code),
        new Problem("zip", "All files as zip", "Compress all as zip and upload", ProblemType.file)
    ]

    return new HomeworkDetails(
        homework.id,
        homework.name, 
        homework.status,
        homework.rate,
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quod quaerat impedit quam facere rerum. Rem, excepturi. Delectus laboriosam blanditiis eos expedita officiis id asperiores, ad adipisci assumenda quia cupiditate?",
        "Fugiat quod quaerat impedit quam facere rerum. Rem, excepturi.",
        // undefined,
        resources,
        problems
    )
}

export default {
    getHomeworks,
    getHomeworkDetails
}