import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput , Button, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import Win from './components/win'
import Lost from './components/lost'




export default function Finish(props) {

  let status = useSelector(state => state.statusSudoku)
  let name = props.route.params.playerName
  const goHome =()=>{
    props.navigation.replace('Home')
  }

  return (

    <View style={styles.container}>
      {status === 'solved' ? <Win name={name} btn={goHome}/> : <Lost name={name} btn={goHome}/>
      }
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});