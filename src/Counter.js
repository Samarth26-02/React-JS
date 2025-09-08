import React, {useState} from "react";

function Counter(){
    const[count, setCount]=useState(0);

    return(
        <div>
            <h1>Count Example with useState.</h1>
            <h3>Current Count:{count}</h3>
            <button onClick={() => setCount(count+1)}>Increase</button>
            <button onClick={() => setCount(count-1)}>Decrese</button>
            <button onClick={() =>setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;