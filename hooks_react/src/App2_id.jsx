import { useEffect, useState } from "react";
import axios from "axios";
function App()
{
  return <TodoId id={1}></TodoId> 
}


function TodoId({ id })
{
    const [todos, setTodos] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8080/todos?id="+id ).then(function (response)
        {
            setTodos(response.data.todos)
        })
    }, [])
    
    
        return <div>
        <h1>{todos.title}</h1>
        <h2>{todos.description}</h2>
    </div>
    
}


export default App;