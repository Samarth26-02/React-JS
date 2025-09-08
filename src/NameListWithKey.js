function NameListWithKey(){
    const names=["Sam","Max","Charles","Oscar"];

    return(
        <div>
            <h2>Names List with Key..</h2>
            <ul>
                {names.map((name,index) =>(
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default NameListWithKey;