import { createContext, useState, useContext } from "react";
import axios from "axios";

import { getToken, setToken } from "../utils/auth";

/* 
    handle authentication status
*/

// create context object
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(getToken() !== null);
    // const [isAdmin, setIsAdmin] = useState(false);

    const login = (tk) => {
        setToken(tk);
        setLoggedIn(getToken());
    };
    const logout = () => {
        setToken(null);
        setLoggedIn(false);
    };

    // check local storage and set auth
    // set default header key for api calls
    if (getToken()) axios.defaults.headers["Authorization"] = `Bearer ${getToken()}`;

    return <AuthContext.Provider value={{ loggedIn, login, logout }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
    return useContext(AuthContext);
}
