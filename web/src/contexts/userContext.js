import React, {createContext, useState } from "react";

/* 
    handle authentication status
*/

// create context object
export const UserContext = createContext();

export const UserContextProvider = props => { 
    const [firstname, setFirstName] = useState("Pablo");
    const [lastname, setLastName] = useState("Gomez");
    const [email, setEmail] = useState("pablo@sydney.com");

    const updateUserData = (fstname, lstname, useremail) => {
        setFirstName(fstname);
        setLastName(lstname);
        setEmail(useremail);
    };

    return (
        <UserContext.Provider
        value={{ 
            firstname, 
            lastname,
            email,
            updateUserData}}
        >
            {props.children}
        </UserContext.Provider>
    );
};
