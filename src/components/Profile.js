import React,{useContext} from "react";
import { UserContext } from "../context/UserContext";

function Profile(){
    const{user}=useContext(UserContext);

    if(!user){
        return <h3>Please Login.</h3>
    }

    return(
        <div>
            <h3>Profile Info:</h3>
            <p><b>Name:</b>{user.name}</p>
            <p><b>Email:</b>{user.email}</p>
        </div>
    );
}

export default Profile;