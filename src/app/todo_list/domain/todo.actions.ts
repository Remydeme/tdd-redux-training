import {Action} from "redux";
import {ITodo} from "./todo";

export const ADD_TODO = 'ADD_TODO'

export interface AddAction extends Action {
    type: string
    payload: ITodo
}



export type todoActions = AddAction
