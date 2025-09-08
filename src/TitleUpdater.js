import React,{useState,useEffect} from "react";

function TitleUpdater(){
    const[count, setCount]=useState(0);

    useEffect(() =>{
        document.title=`You clicked ${count} times`;
    },[count]);

    return(
        <div style={{textAlign:"center", marginTop:"50px"}}>
            <h2>You clicked {count} times...</h2>
            <button onClick={() =>setCount(count+1)}>Click me</button>
            <button onClick={() =>setCount(0)}>Reset</button>
        </div>
    );
}

export default TitleUpdater;