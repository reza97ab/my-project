import {combineReducers} from 'redux';
import {RemoveTodoReducers, TodoReducers} from './indexReducers';
const RootReducers = combineReducers({
    AddTodo : TodoReducers,
    RemoveTodo : RemoveTodoReducers
}) 

export default RootReducers;