import React,{useRef} from "react";

function UncontrolledForm(){
    const inputRef=useRef();

    function handleSubmit(e){
        e.preventDefault();
        alert("Value: "+inputRef.current.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Uncontrolled Form...</h2>
            <input type="text" ref={inputRef} placeholder="Type Here..."></input>
            <button type="submit">Submit</button>
        </form>
    );
}

export default UncontrolledForm;