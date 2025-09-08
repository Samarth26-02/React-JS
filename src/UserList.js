function User(props){
    return <p>{props.name}-{props.age} years old</p>;
}

function UserList(){
    const users=[
        {id:1,name:"Max",age:27},
        {id:2,name:"Oscar",age:25},
        {id:3,name:"Charles",age:26}
    ];

    return(
        <div>
            <h2>Users List with Components</h2>
            {users.map((user) =>(
                <User key={user.id} name={user.name} age={user.age} />
            ))}
        </div>
    );
}

export default UserList;