

export interface ITodo {
    title: string
    description: string
    status: string
}

export class Todo implements ITodo{
    constructor(public title: string, public description: string, public status: string) {
    }
}