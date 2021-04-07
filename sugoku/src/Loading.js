import React, { useState } from 'react';
import { Image,StyleSheet, Text, View, TextInput , Button, Alert } from 'react-native';
import { useSelector } from 'react-redux';



export default function Loading(props) {

//   let status = useSelector(state => state.statusSudoku)


  return (

    <View style={styles.container}>
    <Image source={{uri: 'https://media4.giphy.com/media/VLUtpRsgyMbTUEVxRt/giphy.gif'}}
    style={{width: 400, height: 400}} />
    <Text> LOADING </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});