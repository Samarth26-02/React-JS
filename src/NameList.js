function NameList(){
    const names=["Sam","Max","Charlse","Oscar"];

    return(
        <div>
            <h2>Names List:</h2>
            <ul>
                {names.map((name) =>(
                    <li>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default NameList;