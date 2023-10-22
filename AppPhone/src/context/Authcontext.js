import React , {createContext} from "react";

export const Authcontext = createContext();
 
export const AuthProvider = ({children}) => {
    return (
    <Authcontext.Provider value = "Test value" > {children} </Authcontext.Provider>
    )
};