import { memo, useCallback, useEffect, useState } from "react";

function App()
{
    const [count, setCount] = useState(0);
//to prevent this rerendering of the child
//across rerenders we will remember its original implementation.unless any dependency is changed.
    //if two functions that are defined separately ,even with same body are referentially different( or) they are not referentially equal. 
    const inputFunction = useCallback(() => {
        console.log("render the function");
        setCount(count + 1);
    }, [count]);

  

    return <div>
        <ButtonComponent inputFunction={inputFunction} />
        <button onClick={() => {
            setCount(count + 1);
        }}>Click me :{count}</button>
    </div>
}
//Using memo will cause React to skip rendering a component if its props have not changed. This can improve performance.
//now we are using useEffect, this buttonComponent gets rendered only if a gets changed.
const ButtonComponent =memo (({ inputFunction })=>
{
    console.log("child rendered")
    return <div>
        <button>Button Clicked</button>
    </div>
})

export default App;