import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

function TodoList({todos, deleteTodo}){
  //console.log(todos)
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key ={index}>
          {todo}
          <Button className='m-1' variant="danger" onClick={() => deleteTodo(index)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  )
}

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }
  function deleteTodo(index){
    const updatedTodos = todos.filter((_, i) => i !==index)
    setTodos(updatedTodos); //Updating the todos State:
  }

  return (
    <div>
      <input 
        type="text" 
        value={newTodo} 
        onChange={(event) => setNewTodo(event.target.value)} 
      />
      <Button variant="primary" className="ms-3" onClick={addTodo}>
      Add
      </Button>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App






//<div>
//<ul>
//{todos.map((todo, index) => (
//<li key={index}>{todo}</li>
//))}
//</ul>
//</div>

//'_' it represents each element of the todos array. i represents the index of the current element in the array. The condition i !== index checks if the current element's index is not equal to the index provided as an argument to the deleteTodo function.

//arrow function in the onClick event handler of the "Delete" button to call the deleteTodo prop and pass the current index as an argument. This way, when you click the "Delete" button, it knows which todo item to delete.


//<input>Add" button, the addTodo function is called. This function appends the value of the newTodo state variable to the todos array, effectively adding a new item to the list.