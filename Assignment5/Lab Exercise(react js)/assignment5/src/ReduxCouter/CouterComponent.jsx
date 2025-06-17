import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addAction, minusAction } from './CouterAction'

const CouterComponent = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()
  return (
    <div>
      <h3>Count is {count}</h3>
      <button onClick={()=>dispatch(addAction())}>Add</button>
      <button onClick={()=>dispatch(minusAction())}>Minus</button>
    </div>
  )
}

export default CouterComponent
