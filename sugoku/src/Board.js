import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput , Button ,Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSudokuAsync,
  solveSudokuAsync,
  statusSudokuAsync,
  fetchSudoku} from '../store/action'
import Loading from './Loading'

export default function App(props) {
  const dispatch = useDispatch()
  

  const [player,setPlayer] = useState(props.route.params.playerName)
  const [status,setStatus] = useState('unsolved')
  
  let oriBoard = useSelector(state => state.oriSudoku)
  let board = useSelector(state => state.sudoku)
  let dataStatus = useSelector(state => state.statusSudoku)
  const loading = useSelector(state=>state.loading)

  const level = props.route.params.level
  
  function updateBoard (text,idx1,idx2){
    let newBoard = [...board]
    newBoard[idx1][idx2] = Number(text)

    // onChangeText(newBoard)
    
    console.log(text,idx1,idx2)
    dispatch(fetchSudoku(newBoard))
    // console.log(board)
  } 
  


  function finishPage(){
    validateSugoku()
    props.navigation.replace('Finish',{playerName : props.route.params.playerName})
  } 

  
  const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')

  const encodeParams = (params) => 
  Object.keys(params)
  .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
  .join('&');
  
  
  
  function sugokuSolved(){
    const data = oriBoard
    
    dispatch(solveSudokuAsync(data))
    }
    

    function validateSugoku(){

      const data = {board:board}
      dispatch(statusSudokuAsync(data))
      setStatus(dataStatus)

    }
    
    if(status ==='solved'){
      props.navigation.replace('Finish',{playerName : props.route.params.playerName})
    }
  
    useEffect(() => {
      dispatch(fetchSudokuAsync(level))
    },[] )

    if(loading){
      return <Loading/>
    }

  return (
    <View style={styles.container}>
      <Text style={{padding:10,color:'#db7f67'}}> Level : {props.route.params.level}</Text>
      <Text style={{padding:10,color:'#a60062'}}> {props.route.params.playerName} is Playing</Text>
      <Text style={{padding:2,color:'#9732e5'}}>Status : {status}</Text>
        
           <View style={styles.row}>
  
           { board.length < 1 ? <Text> LOADING :)</Text> : 
            board.map((col,idx1)=>{
              return(
                    <View style={{flexDirection:'row',
                    flexWrap:'wrap'}} key={idx1}>
                {
                
                  col.map((sudoku,idx2)=>{
                    return(
                      <View style={{flexDirection:'row',
                      flexWrap:'wrap'}} key={idx2}>
                        <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={1}
                        value={(sudoku === 0?'':String(sudoku))}
                        onChangeText={text => updateBoard(text,idx1,idx2)}
                        editable={oriBoard[idx1][idx2] === 0? true:false}
                      ></TextInput>
                      </View>
                      )
                    })
                  }
                </View> 
               )
              })
            } 
           </View>
           <View style={{flexDirection:'row', padding:20, margin:3}}>
             <View style={{padding:5}}>
            <Button
            onPress={sugokuSolved}
            color='#d17975'
            title="HELP"/>
             </View>
             <View style={{padding:5}}>
            <Button
            onPress={validateSugoku}
            color='#ffcdb2'
            title="validate"/>
            </View>
           </View>
       
           <Button
      title="Finish"
      color='#ac356d'
      onPress={finishPage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8edeb',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    color:'#db7f67'
  },
  input:{
    height:35,
    borderColor:'#df7c9b',
    borderWidth:1,
    width:30,
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    flexDirection:'row',
    flexWrap:'wrap',
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


