import "./styles.css"
import { useState } from "react"

function App() {

const [newItem, setnewItem] = useState("")
const [todos , setTodos] = useState([])



function handleSubmit(e) {
e.preventDefault()

 setTodos(currentTodo => {
 return [
  ...currentTodo , { id: crypto.randomUUID(), title: newItem , completed: false}]
 })
 setnewItem('')
}


function toggleTodo (id , completed) {
  setTodos(currentTodo => {
  return currentTodo.map(todo => {
    if (todo.id === id) {
      return {...todo, completed}
    }
    return todo
  })
  })
}

function deleteTodo (id) {
setTodos(currentTodo => {
  return currentTodo.filter(todo => todo.id !== id)
})
}

  return (
  <>
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
    <label htmlFor="item">New Item</label>
    <input id="item" value={newItem} onChange= { e => setnewItem(e.target.value)} type="text"/>
    <button className="btn">Add</button>
    </div>
  </form>
    <h1 className="header">Things to do</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => (
          <li key={todo.id}>
          <label>
          <input type="checkbox" checked ={ todo.completed} onChange={e => {
            toggleTodo(todo.id , e.target.checked)
          }}/>
          {todo.title}
          </label>
          <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
          </li>

        ))}
      
      
    </ul>
  </>
  )
}

export default App
