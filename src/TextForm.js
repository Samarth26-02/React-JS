import React,{useState} from "react";

function TextForm(){
    const[text, setText]=useState(" ");

    function handleChange(event){
        setText(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        alert("You submited: "+text);
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>Controlled Form Example...</h2>
            <input 
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type here..."
            />
            <button type="submit">Submit</button>
        </form>
    );

}
export default TextForm;