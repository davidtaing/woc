import React from "react";
import App from "./App";

import { AuthContext } from "../context/authContext";

const AppWrapper = () => {
    const [loggedIn, setLoggedIn] = useState(getToken() !== null);
    const TOKEN_KEY = "tk";

    // should this be here
    // or the authentication page
    // or the login page
    const setToken = (tk) => {
        localStorage.setItem(TOKEN_KEY, tk);
        setLoggedIn(tk !== null);
    };
    const getToken = () => localStorage.getItem(TOKEN_KEY);

    return (
        <AuthContext.Provider
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
