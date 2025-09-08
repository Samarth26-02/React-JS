import React,{useState} from "react";

function LoginControl(){
    const[isLoggedIn, setIsLoggedIn]=useState(false);

    function handleLogIn(){
        setIsLoggedIn(true);
    }

    function handleLogOut(){
        setIsLoggedIn(false);
    }

    return(
        <div>
            {isLoggedIn ?(
                <div>
                    <h2>Welcome back..</h2>
                    <button onClick={handleLogOut}>Log Out</button>
                    </div>
            ) : (
                <div>
                    <h2>Please Login...</h2>
                    <button onClick={handleLogIn}>Log In</button>
                </div>
            )
        }
        </div>
    );
}

export default LoginControl;