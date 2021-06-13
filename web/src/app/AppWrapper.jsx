import React, { useState } from "react";
import App from "./App";
import axios from "axios";

import { AuthContext } from "../contexts/authContext";

const TOKEN_KEY = "tk";

const getToken = () => localStorage.getItem(TOKEN_KEY);

const AppWrapper = () => {
    // const [loggedIn, setLoggedIn] = useState(getToken() !== null);
    const [loggedIn, setLoggedIn] = useState(getToken() !== null);

    // should this be here
    // or the authentication page
    // or the login page
    const setToken = (tk) => {
        if (tk) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${tk}`;
            localStorage.setItem(TOKEN_KEY, tk);
        } else {
            localStorage.removeItem(TOKEN_KEY);
            delete axios.defaults.headers.common["Authorization"];
        }
        setLoggedIn(getToken() !== null);
    };

    if (getToken()) axios.defaults.headers["Authorization"] = `Bearer ${getToken()}`;

    return (
        <AuthContext.Provider
            // fix what is passed in here
            value={{
                loggedIn,
                setLoggedIn,
                setToken,
            }}
        >
            <App />
        </AuthContext.Provider>
    );
};

export default AppWrapper;
