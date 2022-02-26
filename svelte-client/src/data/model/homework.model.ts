import type { Status } from "./status.enum"

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

export class Problem {
    name: string
    comment: string

    constructor(name: string, comment: string) {
        this.name = name
        this.comment = comment
    }
}

export class HomeworkDetails extends HomeworkModel {

    details: string
    comment: string

    problems: Problem[]

    constructor(
        id: string, 
        name: string, 
        status: Status, 
        rate: string = '0', 
        details: string, 
        comment: string, 
        problems: Problem[] = []
        ) {
        super(id, name, status, rate)
        this.details = details
        this.comment = comment
        this.problems = problems
    }
}