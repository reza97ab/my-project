import {AddTodo, RemoveTodo} from '../actions/types';
const initalStateAddTodo = {
    Add_data : []
}

const initalStateRemoveTodo = {
    Remove_data : []
}

let tododata = [];
let removedata = [];

const TodoReducers = (state = initalStateAddTodo, action) => {
    switch (action.type) {
        case AddTodo:
            action.payload = {
                ...action.payload,
                status : 'incomplete'
            }
            tododata.push(action.payload);
            return{
                ...state,
                Add_data : tododata
            }
    
        default:
            return state
    }
}

const RemoveTodoReducers = (state = initalStateRemoveTodo, action) => {
    switch (action.type) {
        case RemoveTodo:
            action.payload = {
                ...action.payload,
                status : 'complete'
            }
            removedata.push(action.payload);
            return{
                ...state,
                Remove_data : removedata
            }
    
        default:
            return state
    }
}

export {TodoReducers, RemoveTodoReducers};

