import React,{useContext} from "react";
import { UserContext } from "../context/UserContext";

function Navbar(){
    const{user,login,logout}=useContext(UserContext);

    return(
        <div style={{marginBottom:"20px"}}>
            {user ? (
                <>
                    <span>Welcome,{user.name}</span>
                    <button onClick={logout} style={{marginTop:"10px"}}>Logout</button>
                </> 
            ) : (
                <button onClick={login}>Login</button>
            )}

        </div>
    );
}

export default Navbar;