function ClickEvent(){
    function handleClick(){
        alert("Button clicked..");
    }

    return(
        <div>
            <h2>Basic Event Example</h2>
            <button onClick={handleClick}>Clicke Me</button>
        </div>
    );
}

export default ClickEvent;