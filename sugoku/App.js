import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput , Button } from 'react-native';
import Board from './src/Board'
import Home from './src/Home'
import Finish from './src/Finish'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import store from './store/index'


export default function App() {

const Stack = createStackNavigator();

  
return (
    <>
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Board" component={Board} />
        <Stack.Screen name="Finish" component={Finish}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height:30,
    borderColor:'grey',
    borderWidth:1
  }
});
