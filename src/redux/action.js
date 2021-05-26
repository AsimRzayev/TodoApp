import {typeConst} from './constants'
export function addTodo(todo){
    return {
        type:typeConst.ADD_TODO,
        payload:todo
    }
}
export function deleteTodo(todoId){
    return {
        type:typeConst.DELETE_TODO,
        payload:todoId
    }
}
export function updateTodo(todo){
    return {
        type:typeConst.UPDATE_TODO,
        payload:todo
    }
}