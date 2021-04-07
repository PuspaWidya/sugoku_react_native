import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image,StyleSheet, Text, View, TextInput , Button, Alert } from 'react-native';





export default function Home(props) {
    
const [playerName,setPlayerName] = useState('')
const [level,setLevel] = useState('')
    
    
const Stack = createStackNavigator();


    function inputName(text){
        setPlayerName(text)
        
    }

    function startGame(){
      console.log(playerName,'<<<<<<')
        if(playerName !== '' && playerName !== ' ' && level !== '' ){
            props.navigation.replace('Board',{
                playerName,level
            })
        }else{
            Alert.alert('Nama pemain & level harus diisi')
        }
    }



  return (

    <View style={styles.container}>
      <Text> Level : {level}</Text>
       <Image source={{uri: 'https://media0.giphy.com/media/Sr3l3ZS3gTOaB0QsgR/giphy.gif'}}
    style={{width: 200, height: 200}} />
      <Text> Put Your Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => inputName(text)}
    ></TextInput>

    <View style={styles.btn}>
      <View style={{paddingRight:5}}>
      <Button
       color='#E7CFCD'
        onPress={()=> setLevel('easy')}
        title="easy"/>
      </View>
      <View style={{paddingRight:5}}>
        <Button
        color='#E7CFCD'
        onPress={()=> setLevel('medium')}
        title="medium"/>
      </View>
      <View style={{paddingRight:5}}>
        <Button
        color='#E7CFCD'
        onPress={()=> setLevel('hard')}
        title="hard"/>
      </View>
      <View style={{width:300}}>
      </View>
    </View>
      <View style={{marginTop:20, width:300}}>
        <Button
          title="START GAME"
          color='#e5989b'
          onPress={() => startGame()}
        />
      </View>

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
  input:{
    height:35,
    borderColor:'grey',
    borderWidth:1,
    width:300,
    textAlign:'center',
    justifyContent: 'center'
  },
  btn:{
    width:200,
    color:'black',
    flexDirection: 'row',
    margin:10,
  }
    // alignItems: 'center',
});