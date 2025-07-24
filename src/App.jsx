import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
  const [counter, setCount] = useState(15)
  const add=()=>{
    if(counter >= 20){
      alert('Counter cannot exceed 20')
      return
      
    }
    setCount(counter + 1)
  }
  const subtract=()=>{
    if(counter <= 0){
      alert('Counter cannot be less than 0')
      return
    }
    setCount(counter - 1)
  }

  return (
    <>
      <p>
        counter:{counter}
      </p>
      <div className='bg-green-500 p-4 rounded-xl shadow-md'>
        <p>
          {counter}
        </p>
        <button onClick={add}>Add</button>
        <br/>
        <button onClick={subtract} >Subtract</button>
      </div>
    </>
  )
}

export default App
