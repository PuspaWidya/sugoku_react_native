const initialState={
    sudoku:[],
    oriSudoku:[],
    statusSudoku:'',
    solveSudoku:[],
    loading:false
}

function reducer(state = initialState,action){
    // console.log(action.type,'ACTION')
    if(action.type === 'sudoku/readData'){
        return{...state,
        sudoku:action.payload}
    }else if(action.type === 'oriSudoku/readData'){
        return{...state,
        oriSudoku:action.payload}
    }else if(action.type === 'sudoku/solve'){
        return{...state,
        solveSudoku:action.payload}
    }else if(action.type === 'sudoku/status'){
        return{...state,
        statusSudoku:action.payload}
    }else if(action.type === 'sudoku/loading'){
        return{...state,
        loading:action.payload}
    }
    return state
}

export default reducer