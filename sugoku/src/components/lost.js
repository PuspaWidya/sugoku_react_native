import React, { useState } from 'react';
import { Image,StyleSheet, Text, View, TextInput , Button, Alert } from 'react-native';
import { useSelector } from 'react-redux';



export default function Lose(props) {

  return (
    <View style={styles.container}>
    <Image source={{uri:'https://media4.giphy.com/media/b8AysS0l3qm6nLO55c/giphy.gif'}}
    style={{width: 300, height: 300}} />
    <Text style={{color:'#dd95b1', padding:10}}> Sorry, You lose {props.name} </Text>
    <Button
        color='#b9375e'
        onPress={()=> props.btn()}
        title="Do you want to play again?"/>
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