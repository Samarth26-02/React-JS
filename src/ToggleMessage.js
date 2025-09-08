import React,{useState} from "react";

function ToggleMessage(){
    const[isVisible, setIsVisible]=useState(false);

    function handleVisible(){
        setIsVisible(true);
    }

    function handleNotVisible(){
        setIsVisible(false);
    }

    return(
        <div>
        {isVisible ?(
            <div>
                <h2>Message Not visible...</h2>
                <button onClick={handleNotVisible}>See Message</button>
            </div>
        ) : (
            <div>
                <h2>Message Visible...</h2>
                <button onClick={handleVisible}>Hide Message</button>
            </div>
        )
    }
        </div>
    );
}

export default ToggleMessage;