import {typeConst} from "./constants";
import { todos} from './states'
export let reducer = (state=todos, action) => {
    let newTodos
    switch (action.type) {
        case typeConst.ADD_TODO:
             newTodos=[...state];
            newTodos.push(action.payload)
            return newTodos;
            
        case typeConst.DELETE_TODO:
            newTodos=[...state];
            newTodos=newTodos.filter(todo=>todo.id!==action.payload)
            return newTodos;
        case typeConst.UPDATE_TODO:
            newTodos=[...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index+=1;
                if (newTodos[i].id === action.payload.id) {
                    break;
                }

            }
            if (index !== -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }
            
        default:
            return state;
    }
};
