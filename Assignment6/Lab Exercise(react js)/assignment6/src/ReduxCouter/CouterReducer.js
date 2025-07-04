import React from 'react'
import { add, minus } from './CouterAction'

const initialState = {
    count: 0,
    data:[]
}
const CouterReducer = (state=initialState,action) => {
  switch (action.type) {
    case add:{
        return {
            ...state,
            count: state.count + 1
        }
    }
    case minus:{
        return {
            ...state,
            count: state.count - 1
        }
    }
    default: return state
  }
}

export default CouterReducer
