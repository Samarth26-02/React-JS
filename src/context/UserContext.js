import React,{useState, createContext} from "react";

export const UserContext = createContext();

export function UserProvider({children}){
    const [user, setUser]=useState(null);
    
    const login = () => setUser({name:"Samarth", email:"samarth@gmail.com"});
    const logout = () => setUser(null);

    return (
        <UserContext.Provider value={{user,login,logout}}>
            {children}
        </UserContext.Provider>
    );
}
