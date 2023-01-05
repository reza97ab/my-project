import {AddTodo, RemoveTodo} from './types';
let incrementID = 0

const Add_Todo = (value) => {
    return{
        type : AddTodo,
        payload : {
            id : ++incrementID,
            ...value
        }
    }
}

const Remove_Todo = (value) => {
    return{
        type : RemoveTodo,
        payload : {
            id : ++incrementID,
            ...value
        }
    }
}

export {
    Add_Todo,
    Remove_Todo
}