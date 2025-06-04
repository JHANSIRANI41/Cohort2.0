import { memo, useEffect, useState } from "react";

function App()
{
    const [count, setCount] = useState(0);
//here a is not changing,so this gets rendered only at first time.After that useEffect wont gets rendered because a is not changing. 
    const a = 19;
    useEffect(() => {
        console.log("after variable render");
    },[a])
    
  

    return <div>
        <ButtonComponent a={a} />
        <button onClick={() => {
            setCount(count + 1);
        }}>Click me :{count}</button>
    </div>
}
//Using memo will cause React to skip rendering a component if its props have not changed. This can improve performance.
//now we are using useEffect, this buttonComponent gets rendered only if a gets changed.
const ButtonComponent = memo(({ a })=>
{
    console.log("child rendered")
    return <div>
        <button>Button Clicked</button>
    </div>
})

export default App;