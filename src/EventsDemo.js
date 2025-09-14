
import React,{useState} from "react";

function EventsDemo(){
    const[message, setMessage]=useState("No action yet...");

    function handleClick(){
        setMessage("Button Clicked...");
    }

    function handleMouseEnter(){
        setMessage("Mouse entered...");
    }

    function handleMouseLeave(){
        setMessage("Mouse left...");
    }

    return(
        <div>
            <h2>events Demo</h2>
            <button 
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
                Hover or Click me..
            </button>
            <p>Message:{message}</p>
        </div>
    );
}

export default EventsDemo;
