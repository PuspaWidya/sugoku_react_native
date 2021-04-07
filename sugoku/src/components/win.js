import React, { useState } from 'react';
import { Image,StyleSheet, Text, View, TextInput , Button, Alert } from 'react-native';
import { useSelector } from 'react-redux';



export default function Win(props) {
  return (

    <View style={styles.container}>
    <Image source={{uri: 'https://media1.giphy.com/media/1dHXHhYBzkrkK3p17M/giphy.gif'}}
    style={{width: 400, height: 400}} />
    <Text style={{color:'#e05780',padding:5}}> You Win {props.name}! </Text>
    <Text style={{color:'#b9375e',padding:10}}> Here a heart for you </Text>
    <Button
        onPress={()=> props.btn()}
        title="Do you want to play again?"
        color="#e05780"/>
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