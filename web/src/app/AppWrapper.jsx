import React, { useState } from "react";
import App from "./App";
import axios from "axios";

/* 
    Top level component
    Used to handling auth and context only
*/

/* 
    NOTES:
        - what needs to be considered
        - login status
        - login (set key)
        - logout (clear key)

*/

import { AuthContext } from "../contexts/authContext";

const TOKEN_KEY = "tk";

const getToken = () => localStorage.getItem(TOKEN_KEY);
const setToken = (tk) => {
    if (tk) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${tk}`;
        localStorage.setItem(TOKEN_KEY, tk);
    } else {
        localStorage.removeItem(TOKEN_KEY);
        delete axios.defaults.headers.common["Authorization"];
    }
};

const AppWrapper = () => {
    const [loggedIn, setLoggedIn] = useState(getToken() !== null);
    const [isAdmin, setIsAdmin] = useState(false);

    const logIn = (tk) => {
        setToken(tk);
        setLoggedIn(getToken());
    };
    const logOut = () => {
        setToken(null);
        setLoggedIn(false);
    };

    // check local storage and set auth
    // set default header key for api calls
    if (getToken()) axios.defaults.headers["Authorization"] = `Bearer ${getToken()}`;

    return (
        <AuthContext.Provider
            // fix what is passed in here
            value={{
                loggedIn,
                setLoggedIn,
                logIn,
                logOut,
                setToken,
            }}
        >
            <App />
        </AuthContext.Provider>
    );
};

export default AppWrapper;
