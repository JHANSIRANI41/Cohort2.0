import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  

  useEffect(() => {
    // fetch("http://localhost:8080/todos").then(async function (res) {
    //   const json =await res.json();
    //   setTodos(json.todos);

    axios.get("http://localhost:8080/todos").then(function (response) {
      setTodos(response.data.todos)
    
    })
  }, []);
  return (
    <div>
     
      {/* {todos.map(function(todo) {
       return <Todo key={todo.id} title={todo.title}  description={todo.description}  ></Todo>
     })} */}
      {todos.map(function (todo) {
        return  <Todo key={todo.id} title={todo.title}  description={todo.description} > </Todo>
      })}
    </div>
  )
}

function Todo({ title, description })
{
  return <div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>
}

export default App
