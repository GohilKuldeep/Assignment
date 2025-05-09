import React,{useState} from 'react'

const CouterTask = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
      };

  return (
     <div>
      <h2>Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default CouterTask
