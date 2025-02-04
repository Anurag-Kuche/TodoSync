import { useState } from 'react'

import Navbar from './components/Navbar'

function App() {
  const[todo,setTodo]=useState("")
  const [todos,setTodos]=useState([])

  const handleEdit=()=>{

  }
  const handleDelete=()=>{

  }

  const handleAdd=()=>{
    setTodos([...todos,{todo,isCompleted:false}])
    setTodo("")
  }

  const handleChange=(e)=>{
    setTodo(e.target.value)
  }

  return (
    <>
    <Navbar/>
     <div className=" bg-violet-100 container mx-auto my-5 rounded-xl p-5 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input onChange={handleChange}  value={todo} type="text" className='bg-white w-1/2'/>
          <button onClick={handleAdd} className='bg-violet-500 hover:bg-violet-900 p-2 py-1 text-sm font-bold text-white rounded-lg mx-6'>Add</button>
        </div>
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.map(item=>{
            return <div className="todo flex w-1/2 justify-between">
            <div className={item.isCompleted?"":"line-through"}>{item.todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} className='bg-violet-500 hover:bg-violet-900 p-2 py-1 text-sm font-bold text-white rounded-lg mx-1'>Edit</button>
              <button onClick={handleDelete} className='bg-violet-500 hover:bg-violet-900 p-2 py-1 text-sm font-bold text-white rounded-lg mx-1'>Delete</button>

            </div>
          </div>

          })}
          
        </div>
     
     </div>
    </>
  )
}

export default App
