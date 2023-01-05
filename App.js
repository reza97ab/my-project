import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import RootReducers from './components/redux/reducers'
import {HomeScreen, AddTodoScreen} from './screens';
import MoreTodo from './screens/MoreToDo'

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={createStore(RootReducers)}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown : false
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddTodo" component={AddTodoScreen} />
          <Stack.Screen name="MoreTodo" component={MoreTodo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
