import { useEffect, useMemo, useState } from "react";

function App()
{
    const [counter, setCounter] = useState(0);
    const [inputValue, setValue] = useState(1);
    const [count, setCount] = useState(0);
    function increment()
    {
        
        setCounter(counter+1);
    }
    // function Sum({inputValue})
    // {
        
    //     const ans = parseInt(inputValue);
    //     console.log(typeof(ans))
    //     return <div>
            
    //         SUM from 1 to {inputValue} is:{(ans*(ans+1))/2}
    //     </div>
    // }

    // let count = useMemo( ()=>
    // {
    //     let finalCount = 0;
    //     for (let i = 0; i <= inputValue; i++)
    //     {
    //         finalCount = finalCount + i;
    //     }
    //     return finalCount;
    // },[inputValue])

    useEffect(() => {
        let finalCount = 0;
            for (let i = 0; i <= inputValue; i++)
            {
                finalCount = finalCount + i;
        }
        setCount(finalCount);

    },[inputValue])
    return <div>
        <input type="text" placeholder="enter a number" onChange={function (e)
        {
            console.log(e.target.value)
            setValue(e.target.value);
        }} />
        <br />
        <br />
        {/* <Sum inputValue={inputValue}></Sum> */}
        Sum from 1 to {inputValue} is {count}
        <br />
        <button onClick={increment}>Counter {counter}</button>
  </div>
}

export default App;