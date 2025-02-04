import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './components/Navbar';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleDelete = (id) => {
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  };

  const handleAddOrUpdate = () => {
    if (editId) {
      let updatedTodos = todos.map(item => 
        item.id === editId ? { ...item, todo } : item
      );
      setTodos(updatedTodos);
      setEditId(null);
    } else {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    }
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const handleEdit = (id) => {
    let todoToEdit = todos.find(item => item.id === id);
    setTodo(todoToEdit.todo);
    setEditId(id);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-purple-400 to-blue-500 container mx-auto my-5 rounded-xl p-5 min-h-[80vh] shadow-xl">
        <div className="addTodo my-5 text-center">
          <h2 className='text-2xl font-bold text-white'>✨ Add a Todo ✨</h2>
          <div className="flex justify-center mt-4">
            <input 
              onChange={handleChange} 
              value={todo} 
              type="text" 
              className='bg-white w-1/2 p-2 rounded-lg shadow-md text-lg' 
              placeholder='Enter a task...'
            />
            <button onClick={handleAddOrUpdate} 
              className='bg-white text-purple-600 hover:bg-purple-700 hover:text-white transition p-2 py-2 text-lg font-bold rounded-lg mx-4 shadow-lg'>
              {editId ? "Update" : "Add"}
            </button>
          </div>
        </div>

        <h2 className='text-2xl font-bold text-white text-center mt-6'>📌 Your Todos 📌</h2>
        <div className="todos mt-6 px-8">
          {todos.length === 0 ? (
            <p className='text-center text-white text-lg'>No tasks yet! Add one above. 🚀</p>
          ) : (
            todos.map(item => (
              <div key={item.id} className="todo flex items-center justify-between bg-white p-4 rounded-lg shadow-md my-3">
                <div className='flex items-center gap-3'>
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} className='w-5 h-5' />
                  <div className={item.isCompleted ? "line-through text-gray-400 text-lg" : "text-lg font-medium"}>{item.todo}</div>
                </div>
                <div className="buttons flex gap-2">
                  <button onClick={() => handleEdit(item.id)} 
                    className='bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg shadow-md text-sm'>
                    ✏ Edit
                  </button>
                  <button onClick={() => handleDelete(item.id)} 
                    className='bg-red-500 hover:bg-red-700 text-white p-2 rounded-lg shadow-md text-sm'>
                    ❌ Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;