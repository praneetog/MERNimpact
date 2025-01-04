import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //Function to increment count on click
  const onClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <div className='text-4xl font-bold flex justify-center items-center'>
        Hello World
      </div>
      <div className='flex justify-center items-center mt-4'>
        <button className='bg-gray-200 px-4 py-1 rounded-md hover:bg-black hover:text-gray-300 duration-300' onClick={onClick}>Count : {count}</button>
      </div>
    </div>
  )
}

export default App