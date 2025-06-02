import axios from "axios";
import { useEffect, useState } from "react";

function App()
{
    const [id, setId] = useState(1);
    return <div>
        <button onClick={function ()
        {
            setId(1);
        }}>1</button>
        <button onClick={function ()
        {
            setId(2);
        }}>2</button>
        <button onClick={function ()
        {
            setId(3);
        }}>3</button>
        <button onClick={function ()
        {
            setId(4);
        }}>4</button>
       
       
        <Todoid id={id}></Todoid>
    </div>
}

function Todoid({ id })
{
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos?id=${id}`).then(
            function (response) {
                setTodos(response.data[0]);
            }
        )
    }, [id]);

    // return <div>
    //     id:{id}
    //   {todos.title}
    //   {todos.userId}      
    // </div>
    
     return <div>
      <h3>ID: {id}</h3>
      {todos ? (
        <div>
          <p>Title: {todos.title}</p>
          <p>User ID: {todos.userId}</p>
        </div>
      ) : (
        <p>Loading...</p> // Optional loading fallback
      )}
    </div>
}


export default App;