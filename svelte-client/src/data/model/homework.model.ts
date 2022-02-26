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