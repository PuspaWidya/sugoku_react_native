    import axios from 'axios'

    export function fetchSudoku(payload){
        return{type:'sudoku/readData',payload}
    }

    export function oriSudokuAsync(payload){
        return{type:'oriSudoku/readData',payload}
    }

    export function solveSugoku(payload){
        return{type:'sudoku/solve',payload}
    }

    export function statusSugoku(payload){
        return{type:'sudoku/status',payload}
    }

    export function statusLoading(payload){
        return{type:'sudoku/loading',payload}
    }


  const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')

  const encodeParams = (params) => 
  Object.keys(params)
  .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
  .join('&');
  
  

export function fetchSudokuAsync(level){
    console.log(level,'LEVEL')
    return(dispatch)=>{
        dispatch(statusLoading(true))
        axios({
            url:`https://sugoku.herokuapp.com/board?difficulty=${level}`,
            method: "get"
          })
          .then(({data})=>{
            //   console.log(data.board,'<<<<')
              dispatch(oriSudokuAsync(data.board.map(el=>[...el])))
                dispatch(fetchSudoku(data.board))
          })
          .catch(err=>{
            console.log(err)
          })
          .finally(_=>{
              dispatch(statusLoading(false))
          })
    }
}



export function solveSudokuAsync(data){
    return(dispatch)=>{
        // console.log('HELP')
        // console.log(data)
        fetch('https://sugoku.herokuapp.com/solve', {
            method: 'POST',
            body: encodeParams(data),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          })
            .then(response => response.json())
            .then(response => {
                // console.log(response.solution,'<<<<<<<<<<<')
                dispatch(fetchSudoku(response.solution))
                
            }
            )
            .catch(console.warn)
    }
}



export function statusSudokuAsync(data){
    return(dispatch)=>{
        console.log('STATUSSSS')
        // const data = {board:board}
        // console.log(data)
        fetch('https://sugoku.herokuapp.com/validate',{
            method: 'POST',
            body: encodeParams(data),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
            .then(response => response.json())
            .then(response => {
            // setStatus(response.status)
            // console.log(response.status,'STATUS')
            dispatch(statusSugoku(response.status))
            })
            .catch(console.warn)
        }
}   