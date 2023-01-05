import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TodoHeader} from '../components';
import TodoContent from '../components/TodoContent'

const AddTodoScreen = (props) => {
    return(
        <View style={{flex : 1, backgroundColor : '#fff'}}>
            <TodoHeader {...props} />
            <TodoContent {...props} />
        </View>
    )
}

export {AddTodoScreen}