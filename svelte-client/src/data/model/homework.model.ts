import type { Status } from "./status.enum"

export class Resource {
    name: string
    link: string

    constructor(name: string, link: string) {
        this.name = name
        this.link = link
    }
}

export class Message {
    date: string
    text: string

    constructor(date: string, text: string) {
        this.date = date
        this.text = text
    }
}

export class HomeworkModel {
    id: string
    name: string
    status: Status
    rate: string

    constructor(id: string, name: string, status: Status, rate?: string) {
        this.id = id
        this.name = name
        this.status = status
        this.rate = rate
    }
}

export enum ProblemType {
    code,
    link,
    text,
    file
}

export class Problem {
    code: string
    name: string
    comment: string
    type: ProblemType

    constructor(code: string, name: string, comment: string, type: ProblemType) {
        this.code = code
        this.name = name
        this.comment = comment
        this.type = type
    }
}

export class HomeworkDetails extends HomeworkModel {

    details: string
    comment: string
    _resources: Resource[]

    problems: Problem[]

    constructor(
        id: string, 
        name: string, 
        status: Status, 
        rate: string = '0', 
        details: string, 
        comment: string, 
        resouces: Resource[] = [],
        problems: Problem[] = []
        ) {
        super(id, name, status, rate)
        this.details = details
        this.comment = comment
        this.resources = resouces
        this.problems = problems
    }

    get resources () {
        return this._resources
    }

    set resources (value: Resource[]) {
        this._resources = value
    }
}