function GreatingEvent(){
    function sayHello(name){
        alert("Hello,"+name);
    }

    return (
        <div>
            <h2>Event with parameters</h2>
            <button onClick={() =>sayHello("Samarth")}>Say Hello to Samarth</button>
            <button onClick={() =>sayHello("Max")}>Say Hello to Max</button>
        </div>
    );
}

export default GreatingEvent;