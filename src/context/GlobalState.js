import React, { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
          { id: 1, text: 'Food', amount: -20 },
          { id: 2, text: 'Salary', amount: 4800 },
           { id: 3, text: 'Laptop', amount: -1250 },
           { id: 4, text: 'Camera', amount: 150 }
        ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    
    const deleteTransaction = id => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    const addTransaction = transaction => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    
    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}
