import {Todo} from "../../domain/todo";
import {Store} from 'redux'
import {AppState} from "../../../../configuration/rootState";
import {ADD_TODO, AddAction, todoActions} from "../../domain/todo.actions";

describe('todo', ()=>{
    let store: Store<AppState, todoActions>

    it('Create a new todo', ()=>{
        // given
        const givenTodo : Todo = new Todo('todo', 'description', 'not started')
        const expectedTodo : Todo = new Todo('todo', 'description', 'not started')

        // when
        store.dispatch({type: ADD_TODO, payload: givenTodo})

        // then
        expect(getLastTodo(store.getState())).toEqual(expectedTodo)
    })

})