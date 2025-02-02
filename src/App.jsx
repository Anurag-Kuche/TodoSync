import { useState } from 'react'

import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <div className=" bg-violet-100 container mx-auto my-5 rounded-xl p-5 min-h-[80vh]">
        <div className="addTodo">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input type="text" className='bg-white'/>
          <button className='bg-violet-500 hover:bg-violet-900 p-2 py-1 text-sm font-bold text-white rounded-lg mx-6'>Add</button>
        </div>
        <h2 className='text-lg font-bold'>Your ToDo'S</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text"></div>
            <div className="buttons ">
              <button className='bg-violet-500 hover:bg-violet-900 p-2 py-1 text-sm font-bold text-white rounded-lg mx-1'>Edit</button>
              <button className='bg-violet-500 hover:bg-violet-900 p-2 py-1 text-sm font-bold text-white rounded-lg mx-1'>Delete</button>

            </div>
          </div>
        </div>
     
     </div>
    </>
  )
}

export default App
