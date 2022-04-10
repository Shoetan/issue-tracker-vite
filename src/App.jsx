import { useState } from 'react'




function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className="font-poppins"> {count}</div> 
      <button   className="font-poppins" onClick={() => { setCount(count + 1) }} > Increase counter </button>
      <button className="font-poppins" onClick={() =>{setCount(count -1 )}}> Decrease counter </button>
    
      
    
      </>
  )
}

export default App
