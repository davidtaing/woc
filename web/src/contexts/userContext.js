import React, { createContext, useState } from "react";

/* 
    handle authentication status
*/

// create context object
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
    });

    const updateUserData = (firstname, lastname, email) => {
        setUser({ firstname, lastname, email });
    };

    return (
        <UserContext.Provider
            value={{
                user,
                updateUserData,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
