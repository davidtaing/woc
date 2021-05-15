import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import axios from "axios";

/* 
    wrapper for protected routes

    TODO:
    - 
*/

// this is re-rendering twice
// same thing happening with strict mode removed
const UserRoute = ({ component: Component, ...rest }) => {
    const { loggedIn, setToken } = useAuth();
    // call server to check token
    if (loggedIn) {
        axios
            .get("/api/auth")
            .then((res) => {
                console.log("good token");
            })
            .catch((e) => {
                if (e.response.status === 401) setToken(null);
            });
    }

    // redirect to login if not authenticated
    const access = (props) => {
        return loggedIn ? (
            <Component {...props} />
        ) : (
            // redirect to login if bad / no token
            <Redirect
                to={{
                    pathname: "/login",
                    state: { referer: props.location },
                }}
            />
        );
    };

    return <Route {...rest} render={access} />;
};

export default UserRoute;
