import React, {useState} from "react";

function TextInput(){
    const[text, setText]=useState("");
    const[message, setMessage]=useState("Not clicked yet...");

    function handleText(event){
        setText(event.target.value);
    }

    function handleMouseEnter(){
        setMessage("Mouse Entered..");
    }

    function handleMouseLeave(){
        setMessage("Mouse Left...");
    }

    function handleKeyDown(){
        setMessage("Key is pressed...");
    }

    function handleKeyUp(){
        setMessage("Key is released...");
    }

    function handleFocus(){
        setMessage("Element focused...");
    }

    function handleBlur(){
        setMessage("Element blured...");
    }

    return(
        <><div>
            <h1>Text Event where state is updated by events</h1>
            <input type="text" onChange={handleText}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Type here..."></input>
            <p>You typed: {text}</p>
        </div><p>Message:{message}</p></>
    );
}

export default TextInput;