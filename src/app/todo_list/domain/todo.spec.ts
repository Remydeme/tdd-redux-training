import {Todo} from "./todo";


describe('todo', ()=>{

    it('default create a todo item', ()=>{
        // given
        const givenTitle = 'title'
        const givenDescription = 'description'
        const givenStatus = 'done'

        // when
        const givenTodo : Todo = new Todo(givenTitle, givenDescription, givenStatus)

        // then
        expect(givenTodo.title).toEqual(givenTitle)
        expect(givenTodo.description).toEqual(givenDescription)
        expect(givenTodo.status).toEqual(givenStatus)
    })

})